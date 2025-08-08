"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"
import { useTheme } from "next-themes"

interface VoronoiBackgroundProps {
  className?: string
}

export default function VoronoiBackground({ className }: VoronoiBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing SVG
    d3.select(containerRef.current).selectAll("svg").remove()

    const width = window.innerWidth
    const height = window.innerHeight * 0.8 // 80% of viewport height for hero section
    const n = Math.min(150, Math.floor((width * height) / 3000)) // Control number of points
    const r = 5

    // Color scheme based on theme
    const lightModeColors = [
      "#cffafe", // lightest cyan
      "#a5f3fc",
      "#67e8f9",
      "#22d3ee",
      "#06b6d4",
      "#0891b2",
      "#0e7490",
      "#155e75",
      "#164e63",
      "#083344", // darkest cyan
    ]

    const darkModeColors = [
      "#14b8a6", // teal
      "#0d9488",
      "#0f766e",
      "#0891b2", // cyan
      "#06b6d4",
      "#22d3ee",
      "#67e8f9",
      "#a5f3fc",
      "#cffafe",
      "#ecfeff",
    ]

    // Choose color scheme based on theme
    const colorRange = theme === "dark" ? darkModeColors : lightModeColors

    const colorScale = d3.scaleQuantize<string>().domain([0, 10000]).range(colorRange)

    // Safe polygon function
    function polygon(d: any): string {
      if (!d || !Array.isArray(d) || d.length === 0) return ""
      return "M" + d.join("L") + "Z"
    }

    // Create data points with spiral distribution
    const data = d3.range(n).map((i) => {
      const angle = r * (i + 10)
      return {
        x: angle * Math.cos(angle) + width / 2,
        y: angle * Math.sin(angle) + height / 2,
        index: i,
      }
    })

    // Create SVG
    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("position", "absolute")
      .style("top", "0")
      .style("left", "0")
      .style("z-index", "-1")

    // Create force simulation
    const simulation = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(-10))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(5))
      .alphaDecay(0.01)
      .on("tick", updateVoronoi)

    // Function to update the Voronoi diagram
    function updateVoronoi() {
      try {
        // Create Delaunay triangulation
        const delaunay = d3.Delaunay.from(
          data,
          (d) => d.x,
          (d) => d.y,
        )

        // Create Voronoi diagram
        const voronoi = delaunay.voronoi([0, 0, width, height])

        // Update paths
        const paths = svg
          .selectAll("path")
          .data(data)
          .join("path")
          .attr("d", (_, i) => {
            try {
              const cell = voronoi.cellPolygon(i)
              return cell ? polygon(cell) : ""
            } catch (e) {
              return ""
            }
          })
          .style("fill", (_, i) => {
            try {
              const cell = voronoi.cellPolygon(i)
              if (!cell) return colorScale(0)
              const area = d3.polygonArea(cell as [number, number][])
              return colorScale(area)
            } catch (e) {
              return colorScale(0)
            }
          })
          .style("stroke", theme === "dark" ? "#fff" : "#fff")
          .style("stroke-width", "1px")
          .style("stroke-opacity", "0.4")
          .style("opacity", "0.7")

        // Add interaction
        paths.on("mousemove", function (event, d) {
          // Update position based on index
          d.x += Math.sin(d.index) * 2
          d.y += Math.cos(d.index) * 2

          // Keep within bounds
          d.x = Math.max(0, Math.min(width, d.x))
          d.y = Math.max(0, Math.min(height, d.y))

          // Highlight
          d3.select(this).style("fill-opacity", "0.9").style("stroke-width", "2px")

          // Restart simulation with low alpha
          simulation.alpha(0.3).restart()
        })

        // Add circles at Voronoi sites
        svg
          .selectAll("circle")
          .data(data)
          .join("circle")
          .attr("r", 2)
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .attr("fill", theme === "dark" ? "#fff" : "#fff")
          .attr("fill-opacity", 0.6)
      } catch (e) {
        console.error("Error updating Voronoi:", e)
      }
    }

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = window.innerWidth
        const newHeight = window.innerHeight * 0.8

        svg.attr("width", newWidth).attr("height", newHeight)

        // Update center force
        simulation
          .force("center", d3.forceCenter(newWidth / 2, newHeight / 2))
          .alpha(0.3)
          .restart()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      simulation.stop()
    }
  }, [theme]) // Re-run when theme changes

  return <div ref={containerRef} className={`${className || ""}`} id="voronoi-container" />
}
