<template>
    <div class="container"
    :class="{verticalLine : isVertical, horizontalLine: !isVertical}">
        <span class="circle red-c"></span>
        <span class="circle green-c"></span>
        <span class="circle yellow-c"></span>
    </div>
</template>

<script>
export default {
    props: {
        isVertical: Boolean
    }
}
</script>

<style scoped>
.verticalLine span {
    display: block!important;
}
.horizontalLine span {
    display: inline-block!important;
}
</style>