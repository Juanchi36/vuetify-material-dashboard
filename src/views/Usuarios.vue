<template>
  <div>
    <h1 style="margin-left: 20px">Usuarios</h1>
  </div>
</template>

<script>
const leader = 'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
const leaderShort = leader.slice(0, 105) + '...'
const material = 'The Life of Material Dashboard'
const small = 'Header with small subtitle'

export default {
  data: () => ({
    typography: {
      'heading-1': ['Header 1', material, 'h1'],
      'heading-2': ['Header 2', material, 'h2'],
      'heading-3': ['Header 3', material, 'h3'],
      'heading-4': ['Header 4', material, 'h4'],
      'heading-5': ['Header 5', material, 'h5'],
      'heading-6 text-uppercase': ['Header 6', material, 'h6'],
      '': ['Paragraph', leader, 'p'],
      'quote': ['Quote', leader, 'blockquote'],
      'text--disabled': ['Muted Text', leaderShort, 'p'],
      'text-primary': ['Primary Text', leaderShort, 'p'],
      'text-info': ['Info Text', leaderShort, 'p'],
      'text-success': ['Success Text', leaderShort, 'p'],
      'text-warning': ['Warning Text', leaderShort, 'p'],
      'text-danger': ['Danger Text', leaderShort, 'p'],
      'small': ['Small Tag', small, 'h2']
    }
  })
}
</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
