import * as d3 from 'd3';


function Tree(
  data,
  {
    path,
    id = Array.isArray(data) ? (d) => d.id : null, 
    parentId = Array.isArray(data) ? (d) => d.parentId : null, 
    children, 
    tree = d3.tree, 
    sort, 
    label, 
    title, 
    link, 
    linkTarget = '_blank', /
    width = 640, 
    height, 
    r = 3, 
    padding = 1, 
    fill = '#999', 
    fillOpacity, 
    stroke = '#555', 
    strokeWidth = 1.5, 
    strokeOpacity = 0.4, 
    strokeLinejoin, 
    strokeLinecap, 
    halo = '#fff', 
    haloWidth = 3, 
  } = {}
) {

  const root =
    path != null
      ? d3.stratify().path(path)(data)
      : id != null || parentId != null
      ? d3.stratify().id(id).parentId(parentId)(data)
      : d3.hierarchy(data, children);

  if (sort != null) root.sort(sort);

  const descendants = root.descendants();
  const L = label == null ? null : descendants.map((d) => label(d.data, d));

  const dx = 10;
  const dy = width / (root.height + padding);
  tree().nodeSize([dx, dy])(root);

  let x0 = Infinity;
  let x1 = -x0;
  root.each((d) => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  if (height === undefined) height = x1 - x0 + dx * 2;

  const svg = d3
    .create('svg')
    .attr('viewBox', [(-dy * padding) / 2, x0 - dx, width, height])
    .attr('width', width)
    .attr('height', height)
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10);

  svg
    .append('g')
    .attr('fill', 'none')
    .attr('stroke', stroke)
    .attr('stroke-opacity', strokeOpacity)
    .attr('stroke-linecap', strokeLinecap)
    .attr('stroke-linejoin', strokeLinejoin)
    .attr('stroke-width', strokeWidth)
    .selectAll('path')
    .data(root.links())
    .join('path')
    .attr(
      'd',
      d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x)
    );

  const node = svg
    .append('g')
    .selectAll('a')
    .data(root.descendants())
    .join('a')
    .attr('xlink:href', link == null ? null : (d) => link(d.data, d))
    .attr('target', link == null ? null : linkTarget)
    .attr('transform', (d) => `translate(${d.y},${d.x})`);

  node
    .append('circle')
    .attr('fill', (d) => (d.children ? stroke : fill))
    .attr('r', r);

  if (title != null) node.append('title').text((d) => title(d.data, d));

  if (L)
    node
      .append('text')
      .attr('dy', '0.32em')
      .attr('x', (d) => (d.children ? -6 : 6))
      .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .attr('paint-order', 'stroke')
      .attr('stroke', halo)
      .attr('stroke-width', haloWidth)
      .text((d, i) => L[i]);

  return svg.node();
}

export default Tree;
