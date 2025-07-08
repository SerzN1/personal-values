<script lang="ts">
  import { groupData } from './data';
  export let scores: Record<string, number> = {
    SelfTranscendence: 0,
    SelfEnhancement: 0,
    OpennessToChange: 0,
    Conservation: 0
  };
  export let maxRadius: number = 100;

  const svsGroups = [
    { key: 'SelfTranscendence', angle: 270 },
    { key: 'OpennessToChange', angle: 30 },
    { key: 'SelfEnhancement', angle: 90 },
    { key: 'Conservation', angle: 150 },
  ];

  function polarToCartesian(angleDeg: number, radius: number): [number, number] {
    const angleRad = (angleDeg ) * (Math.PI / 180);
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);
    return [x, y];
  }

  // Find max score for normalization (avoid division by zero)
  const maxScore = Math.max(...Object.values(scores), 1);

  // Generate points string for polygon
  const points = svsGroups
    .map(({ key, angle }) => {
      const normalizedRadius = ((scores[key] ?? 0) / maxScore) * maxRadius;
      const [x, y] = polarToCartesian(angle, normalizedRadius);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');
</script>

<svg
  width={maxRadius * 2 + 100}
  height={maxRadius * 2 + 50}
  viewBox={`${-maxRadius - 25} ${-maxRadius - 50} ${maxRadius * 2 + 50} ${maxRadius * 2 + 100}`}
  aria-label="SVS Radial Diagram"
  role="img"
  font-family="Arial, sans-serif"
>
  <!-- Axes -->
  {#each svsGroups as { angle }, i}
    {#key i}
      {@const [x, y] = polarToCartesian(angle, maxRadius)}
      <line x1="0" y1="0" x2={x} y2={y} stroke="#ccc" stroke-width="1" />
    {/key}
  {/each}

  <!-- Polygon showing user scores -->
  <!-- example translucent teal fill -->
  <!-- stroke color for Self-Transcendence -->
  <polygon
    points={points}
    fill="rgba(0, 105, 96, 0.3)"
    stroke="#00695c"
    stroke-width="2"
  />

  <!-- Center dot -->
  <circle cx="0" cy="0" r="3" fill="#333" />

  <!-- Labels -->
  {#each svsGroups as { key, angle }}
    {@const [x, y] = polarToCartesian(angle, maxRadius + 15)}
    <text
      x={x}
      y={y}
      font-size="10"
      font-variant="small-caps"
      fill={groupData[key].color}
      text-anchor="middle"
      alignment-baseline="middle"
    >
      {key.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
    </text>
  {/each}
</svg>

<style>
  svg {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
    margin: auto;
    display: block;
  }
</style>
