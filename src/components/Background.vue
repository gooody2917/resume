<template>
    <div :class="'bg-'+typeClass" class="animated-bg  ">
        <svg :viewBox="getViewBox()" xmlns="http://www.w3.org/2000/svg">
            <g class="anim-bg-hexagon" :transform="getHexagon0Transform()" >
                <polygon class="anim-bg-hexagon0" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay0 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon" :transform="getHexagon1Transform()" >
                <polygon class="anim-bg-hexagon1" points="0,60 -52,30 -52,-30 0,-60 52,-30 52,30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay1 anim-bg-mask" points="0,60 -52,30 -52,-30 0,-60 52,-30 52,30 " />
            </g>
            <g class="anim-bg-hexagon" :transform="getHexagon2Transform()" >
                <polygon class="anim-bg-hexagon2" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay2 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>



            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.28380006,0,0,0.28380006,450.61139,171.15711)">
                <polygon class="anim-bg-hexagon3" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay3 anim-bg-mask" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.69010562,0,0,0.69010562,41.805424,291.97196)">
                <polygon class="anim-bg-hexagon4" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay4 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.66026411,0,0,0.66026411,331.7905,235.83996)">
                <polygon class="anim-bg-hexagon5" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay5 anim-bg-mask" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.42415448,0,0,0.42415448,216.17538,252.36768)">
                <polygon class="anim-bg-hexagon6" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay6 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.2864235,0,0,0.2864235,337.78323,382.37419)">
                <polygon class="anim-bg-hexagon7" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay7 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.42874518,0,0,0.42874518,312.84291,318.12423)">
                <polygon class="anim-bg-hexagon8" points="52,-30 52,30 0,60 -52,30 -52,-30 0,-60 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay8 anim-bg-mask" points="52,-30 52,30 0,60 -52,30 -52,-30 0,-60 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.78684535,0,0,0.78684535,165.75401,332.156)">
                <polygon class="anim-bg-hexagon9" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay9 anim-bg-mask" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(1.1128081,0,0,1.1128081,251.69303,427.71854)">
                <polygon class="anim-bg-hexagon10" points="52,-30 52,30 0,60 -52,30 -52,-30 0,-60 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay10 anim-bg-mask" points="52,-30 52,30 0,60 -52,30 -52,-30 0,-60 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.69961601,0,0,0.69961601,64.458015,415.35089)">
                <polygon class="anim-bg-hexagon11" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay11 anim-bg-mask" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.92326413,0,0,0.92326413,117.72468,528.89163)">
                <polygon class="anim-bg-hexagon12" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay12 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.69305714,0,0,0.69305714,452.13163,265.43239)">
                <polygon class="anim-bg-hexagon13" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay13 anim-bg-mask" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.69305714,0,0,0.69305714,263.09378,556.00486)">
                <polygon class="anim-bg-hexagon14" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay14 anim-bg-mask" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.69305714,0,0,0.69305714,422.99629,358.5384)">
                <polygon class="anim-bg-hexagon15" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay15 anim-bg-mask" points="52,30 0,60 -52,30 -52,-30 0,-60 52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.78684535,0,0,0.78684535,426.7918,68.477473)">
                <polygon class="anim-bg-hexagon16" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay16 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.34545069,0,0,0.34545069,46.479879,38.778187)">
                <polygon class="anim-bg-hexagon17" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay17 anim-bg-mask" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.41431639,0,0,0.41431639,172.83796,41.302336)">
                <polygon class="anim-bg-hexagon18" points="52,-30 52,30 0,60 -52,30 -52,-30 0,-60 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay18 anim-bg-mask" points="52,-30 52,30 0,60 -52,30 -52,-30 0,-60 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.44579767,0,0,0.44579767,37.081603,148.13642)">
                <polygon class="anim-bg-hexagon19" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay19 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.59139884,0,0,0.59139884,236.12668,147.95653)">
                <polygon class="anim-bg-hexagon20" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay20 anim-bg-mask" points="-52,-30 0,-60 52,-30 52,30 0,60 -52,30 " />
            </g>
            <g class="anim-bg-hexagon no-left-side" transform="matrix(0.72716174,0,0,0.72716174,383.50295,160.34102)">
                <polygon class="anim-bg-hexagon21" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
                <polygon class="anim-bg-hexagon-overlay anim-bg-hexagon-overlay21 anim-bg-mask" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30 " />
            </g>



        </svg>
    </div>

</template>
    
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

    @Options({
        props:['typeClass'],
    })
    export default class App extends Vue {
        
        getViewBox = () => {
            let viewBoxes = {
                'left-side': '0 0 300 300',
                'right-side': '0 0 500 600',
            }
            return viewBoxes[this.typeClass];
        };

        getHexagon0Transform = () => {
            let hexagon0Transforms = {
                'left-side': 'matrix(1.5456759,0,0,1.5456759,86.624851,183.25944)',
                'right-side': 'translate(298.43704,69.446904)',
            }
            return hexagon0Transforms[this.typeClass];
        };
        getHexagon1Transform = () => {
            let hexagon1Transforms = {
                'left-side': 'translate(174,68)',
                'right-side': 'matrix(1.5456759,0,0,1.5456759,413.6339,501.58671)',
            }
            return hexagon1Transforms[this.typeClass];
        };
        getHexagon2Transform = () => {
            let hexagon2Transforms = {
                'left-side': 'matrix(0.69010562,0,0,0.69010562,216.88549,157.40634)',
                'right-side': 'matrix(0.69010562,0,0,0.69010562,41.805424,291.97196)',
            }
            return hexagon2Transforms[this.typeClass];
        };
    }
</script>
    
<style lang="scss">
    .animated-bg {
        position: relative;
        
        .anim-bg-hexagon {
            /* fill: none; */
            stroke-linecap: butt;
            stroke-linejoin: butt;
        }

        &.bg-left-side {
            top: 55px;
            width: 260px;
            right: -50px;

            .no-left-side {
                display: none;
            }
            
            .anim-bg-hexagon0 {
                stroke: #06892209;
                stroke-width: 6;
                fill: #00000006;
            }
            .anim-bg-hexagon1 {
                stroke: #06892206;
                stroke-width: 10;
                fill: #00000003;
            }
            .anim-bg-hexagon2 {
                stroke: #06892203;
                stroke-width: 15;
                fill: #00000001;
            }

            .anim-bg-hexagon-overlay0 {
                stroke: #06892210;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay1 {
                stroke: #06892215;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay2 {
                stroke: #06892220;
                animation: draw 10s infinite linear;
            }
        }


        &.bg-right-side {
            width: 40%;
            position: fixed;
            left: 40%;
            top: 5px;

            z-index: 1;
            //rotate: -95deg;
            // left: 165px;


            @media print {
                top: 100px;
                left: 25%;
                width: 550px;
                
                opacity: .1;
            }

            .anim-bg-hexagon0 {
                stroke: #00000025;
                stroke-width: 6;
                fill: #00000010;
            }
            .anim-bg-hexagon1 {
                stroke: #00000020;
                stroke-width: 10;
                fill: #00000015;
            }
            .anim-bg-hexagon2 {
                stroke: #00000015;
                stroke-width: 15;
                fill: #00000001;
            }
            .anim-bg-hexagon3 {
                stroke: #00000013;
                stroke-width: 5;
                fill: #00000001;
            }
            .anim-bg-hexagon4 {
                stroke: #00000011;
                stroke-width: 14;
                fill: #00000001;
            }
            //.anim-bg-hexagon1
            // 
            .anim-bg-hexagon5 {
                stroke: #00000013;
                stroke-width: 13;
                fill: #00000001;
            }
            .anim-bg-hexagon6 {
                stroke: #00000011;
                stroke-width: 12;
                fill: #00000001;
            }
            .anim-bg-hexagon7 {
                stroke: #00000013;
                stroke-width: 15;
                fill: #00000001;
            }
            .anim-bg-hexagon8 {
                stroke: #00000012;
                stroke-width: 11;
                fill: #00000001;
            }
            .anim-bg-hexagon9 {
                stroke: #00000011;
                stroke-width: 10;
                fill: #00000001;
            }
            .anim-bg-hexagon10 {
                stroke: #00000010;
                stroke-width: 14;
                fill: #00000001;
            }
            .anim-bg-hexagon11 {
                stroke: #00000015;
                stroke-width: 16;
                fill: #00000001;
            }
            .anim-bg-hexagon12 {
                stroke: #00000013;
                stroke-width: 17;
                fill: #00000001;
            }
            .anim-bg-hexagon13 {
                stroke: #00000012;
                stroke-width: 18;
                fill: #00000001;
            }
            .anim-bg-hexagon14 {
                stroke: #00000013;
                stroke-width: 19;
                fill: #00000001;
            }
            .anim-bg-hexagon15 {
                stroke: #00000014;
                stroke-width: 20;
                fill: #00000001;
            }
            .anim-bg-hexagon16 {
                stroke: #00000015;
                stroke-width: 23;
                fill: #00000001;
            }
            .anim-bg-hexagon17 {
                stroke: #00000016;
                stroke-width: 22;
                fill: #00000001;
            }
            .anim-bg-hexagon18 {
                stroke: #00000010;
                stroke-width: 21;
                fill: #00000001;
            }
            .anim-bg-hexagon19 {
                stroke: #00000011;
                stroke-width: 15;
                fill: #00000001;
            }
            .anim-bg-hexagon20 {
                stroke: #00000012;
                stroke-width: 10;
                fill: #00000001;
            }
            .anim-bg-hexagon21 {
                stroke: #00000013;
                stroke-width: 11;
                fill: #00000001;
            }
			

            
            .anim-bg-hexagon-overlay0 {
                stroke: #FFFFFF10;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay1 {
                stroke: #FFFFFF15;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay2 {
                stroke: #FFFFFF20;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay3 {
                stroke: #FFFFFF05;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay4 {
                stroke: #FFFFFF06;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay5 {
                stroke: #FFFFFF07;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay6 {
                stroke: #FFFFFF08;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay7 {
                stroke: #FFFFFF09;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay8 {
                stroke: #FFFFFF10;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay9 {
                stroke: #FFFFFF11;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay10 {
                stroke: #FFFFFF05;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay11 {
                stroke: #FFFFFF06;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay12 {
                stroke: #FFFFFF07;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay13 {
                stroke: #FFFFFF08;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay14 {
                stroke: #FFFFFF09;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay15 {
                stroke: #FFFFFF04;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay16 {
                stroke: #FFFFFF03;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay17 {
                stroke: #FFFFFF11;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay18 {
                stroke: #FFFFFF18;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay19 {
                stroke: #FFFFFF16;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay20 {
                stroke: #FFFFFF17;
                animation: draw 10s infinite linear;
            }
            .anim-bg-hexagon-overlay21 {
                stroke: #FFFFFF21;
                animation: draw 10s infinite linear;
            }			
                
        }







        .anim-bg-hexagon-overlay {
            fill: none;
            stroke-width: 3;
            stroke-linecap: butt;
            stroke-linejoin: butt;
            opacity: 0.6;
            stroke-dasharray: 30, 30;
            stroke-dashoffset: 500;
        }

        @keyframes draw {
        0% {
            stroke-dashoffset: 300;
        }
        100% {
            stroke-dashoffset: 0;
        }
        }
    }



</style>
    