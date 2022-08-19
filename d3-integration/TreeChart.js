import React, { useRef, useEffect } from 'react';
import { select, hierarchy, tree, linkVertical, linkHorizontal } from 'd3-integration/D3';
import useResizeObserver from './useResizeObserver';

function TreeChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);


  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const root = hierarchy(data);
    const treeLayout = tree().size([dimensions.width, dimensions.height]);

 
    treeLayout(root);

    console.log('Descendants', root.descendants());
    console.log('Links', root.links());

  
    const linkGenerator = linkHorizontal()
      .x((node) => node.y)
      .y((node) => node.x);

    // nodes
    svg
      .selectAll('.node')
      .data(root.descendants())
      .join('circle')
      .attr('class', 'node')
      .attr('r', 12)
      .attr('fill', 'blue')
      .attr('cx', (node) => node.y)
      .attr('cy', (node) => node.x);
   
    // links
    svg
      .selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('d', linkGenerator)
      .style('stroke', 'red')
      .attr('stroke-dasharray', function () {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr('stroke-dashoffset', function () {
        const length = this.getTotalLength();
        return length;
      })
      .transition()
      .duration(1000)
      .delay((linkObj) => linkObj.source.depth * 1000)
      .attr('stroke-dashoffset', 0);

    // labels
    svg
      .attr('stroke', 'white')
      .selectAll('.label')
      .data(root.descendants())
      .join('text')
      .attr('class', 'label')
      .text((node) => node.data.name)
      .attr('text-anchor', 'middle')
      .attr('font-size', 15)
      .attr('x', (node) => node.y)
      .attr('y', (node) => node.x - 10)
      .transition()
      .duration(1000)
      .delay((node) => node.depth * 1000)
      .attr('opcacity', 1);
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default TreeChart;

