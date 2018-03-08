<template>
    <article-detail :isEdit='true'></article-detail>
</template>

<script>
import ArticleDetail from './component/template'

export default {
  name: 'editForm',
  components: { ArticleDetail }
}
</script>

