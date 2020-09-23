<template>
    <div class="container"
    :class="{verticalLine : isVertical, horizontalLine: !isVertical}">
        <span class="circle red-c"
        :class="{mlAuto: positionLeft, mrAuto: !positionLeft, greyCircle: !redLight}">
        </span>
        <span class="circle green-c"
        :class="{mlAuto: positionLeft, mrAuto: !positionLeft, greyCircle : !greenLight}">
        </span>
        <span class="circle yellow-c"
        :class="{mlAuto: positionLeft, mrAuto: !positionLeft, greyCircle: !yellowLight}"
        ></span>
    </div>
</template>

<script>
export default {
    props: {
        isVertical: Boolean,
        positionLeft: Boolean,
        redLight: Boolean,
        greenLight: Boolean,
        yellowLight: Boolean
    }
}
</script>

<style scoped>
.verticalLine span {
    display: block!important;
    margin-bottom: 10px;
}
.horizontalLine span {
    display: inline-block!important;
    margin-right: 10px;
}
.mlAuto {
    margin-left: auto!important;
}
.mrAuto {
    margin-right: auto!important;
}
.floatLeft {
    float: left!important;
}
.greyCircle {
    background-color: grey!important;
}
</style>