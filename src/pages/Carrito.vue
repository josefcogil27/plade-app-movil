<template>
    <div class="color-fondo-oscuro q-pl-md q-pr-md ">

         <div class="text-center flex content-around item-center q-pa-md">
			<q-btn flat  to="/Home" icon="keyboard_arrow_left" class="icon-no-bg" />
			<h6 class="titulo-header m-0 text-white "> Carrito</h6>
            <div class="w-5"> </div>
		</div>

       <div class="row bg-white  rounded-1 q-pl-sm q-pr-sm q-pb-sm q-ml-xs q-mr-xs">
			<div class="col-12 m-0 p-0 text-right" style="position: relative;right: -10px;">
				<q-btn flat  icon="clear" class="p-0"></q-btn>
			</div>

			<div class="col-4">
				<q-img
				src="images/producto-1.jpg"
				/>
			</div>

			<div class="col-8 q-pl-md">
				<p class="m-0 font-md">serrucho de titanio</p>
				<p class="m-0 font-sm">Nota nota nota nota </p>
				<div class="flex item-center">
					<div class="flex item-center">
						<q-btn @click="cantidad ++" icon="add" size="sm" round class="cl_standar rounded circle "></q-btn>

						<p class="q-mt-md q-mb-md font-lg q-ml-md q-mr-md">{{cantidad }}</p>

						<q-btn @click="cantidad --" icon="remove" size="sm" round class="cl_standar rounded circle"></q-btn>
					</div>

					<div class="">
						<p class="font-md m-0">1,600,000.00 Bsf</p>
					</div>
				</div>
			</div>
		</div>

         <div class="row bg-white q-mt-md rounded-1 q-pl-sm q-pr-sm q-pb-sm q-ml-xs q-mr-xs">
			<div class="col-12 m-0 p-0 text-right" style="position: relative;right: -10px;">
				<q-btn flat  icon="clear" class="p-0"></q-btn>
			</div>

			<div class="col-4">
				<q-img
				src="images/producto-2.jpg"
				/>
			</div>

			<div class="col-8 q-pl-md">
				<p class="m-0 font-md">Juego de alicates</p>
				<p class="m-0 font-sm">Nota nota nota nota </p>
				<div class="flex item-center">
					<div class="flex item-center">
						<q-btn @click="cantidad ++" icon="add" size="sm" round class="cl_standar rounded circle "></q-btn>

						<p class="q-mt-md q-mb-md font-lg q-ml-md q-mr-md">{{cantidad }}</p>

						<q-btn @click="cantidad --" icon="remove" size="sm" round class="cl_standar rounded circle"></q-btn>
					</div>

					<div class="">
						<p class="font-md m-0">1,600,000.00 Bsf</p>
					</div>
				</div>
			</div>
		</div>

        <br/>
		<table id="tabla-totales" class="q-mt-xs text-white text-center mr-1">
			<tr>
				<td colspan="3">TOTALES</td>
			</tr>
			<tr>
				<td>Subtotal:</td>
				<td>3,200,000.00</td>
			</tr>
			<tr>
				<td>Descuento:</td>
				<td class="text-center" >0%</td>
			</tr>
			<tr>
				<td>Total:</td>
				<td>3,200,000.00</td>
			</tr>
		</table>

        	<div style="margin-bottom: 50px;" class="row q-mt-md ">
				<div class="col-12 text-center">
					<q-btn  class=" soft-border w-70 cl_standar" size="md" >Continuar comprando</q-btn>
				</div>

				<div class="col-12 text-center q-mt-md ">
					<q-btn  size="md" class="cl_standar w-70  soft-border" >Enviar pedido</q-btn>
				</div>
			</div>


    </div>
</template>

<script>
export default {
    data(){
        return{
            cantidad : 0
        }
    }
}
</script>

<style type="text/css">
	#tabla-totales {
		font-size: 13px;
		text-align: right;
		margin-left: auto; margin-right: 0;
	}

	#table-totales td,th {
		min-width: 70px;
	}

	#tabla-totales td:last-child {
		width: 80px;
		font-weight: bold;
	}
</style>