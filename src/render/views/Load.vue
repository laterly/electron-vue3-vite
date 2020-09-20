<template>
  <div class="loader">
<div class="cap"></div>
<div class="line">Electron+Vue3</div>
  </div>
</template>

<script>
export default {
  name: 'Load',
  components: {
    
  },
};
</script>
<style scoped>

*{
	margin:0em;
	padding:0em;
}

body { 
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	background: #403833;
	font-family: 'Open Sans';
	font-weight: 100;
	color:#f2f2f2;
	font-size:100%;
	margin:0em;
	padding:0em;
}

/* Start the loader code, first, let's align it the center of screen */
.loader {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align:center;
/* disable selection and cursor changes */
    user-select: none;
    cursor:default;
}

.line{
	border-bottom:5px solid #f2f2f2;
	overflow:hidden;
	width:100%;
	animation: line 2s ease-in-out infinite;
	color:#f2f2f2;
	font-size:4em;
	text-shadow: 0 1px 0 #ccc, 
				 0 2px 0 #c9c9c9,
				 0 3px 0 #bbb,
				 0 4px 0 #b9b9b9,
				 0 5px 0 #aaa,
				 0 6px 1px rgba(0,0,0,.1),
				 0 0 5px rgba(0,0,0,.1),
				 0 1px 3px rgba(0,0,0,.1),
				 0 3px 5px rgba(0,0,0,.1),
				 0 5px 10px rgba(0,0,0,.1),
				 0 10px 10px rgba(0,0,0,.1),
				 0 20px 20px rgba(0,0,0,.15);
	box-shadow: inset 0px -5px 10px -7px rgba(0,0,0,0.75), inset 0px 5px 10px -7px rgba(0,0,0,0.75);
}

.cap{
	position:absolute;
	left:-1px;
	height:100%;
	border-bottom:5px solid #403833;
	-webkit-animation: cap 2s ease-in-out infinite;
	-moz-animation: cap 2s ease-in-out infinite;
	-mos-animation: cap 2s ease-in-out infinite;
	-o-animation: cap 2s ease-in-out infinite;
	animation: cap 2s ease-in-out infinite;
	background:#403833;

}


@keyframes line{
	0% {width:0%;}
	50%,100% {width:100%;}
}

@keyframes cap{
	0%,50% {width:0%;}
	100% {width:100%;}
}

</style>
