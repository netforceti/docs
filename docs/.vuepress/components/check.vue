<template>
  <input type="checkbox" :checked="checked" disabled="disabled">
</template>

<script>
export default {
    props: [
        'checked', 
    ]
};
</script>
