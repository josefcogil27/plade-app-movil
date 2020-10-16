<template>
	<div class="fuente">

		  <div class="text-center flex content-around item-center q-pa-md">
					<q-btn  flat  icon="keyboard_arrow_left" label="" to="/Home" />
				<h6 class="titulo-header m-0 q-ma-md "> Notificaciones</h6>
			<q-btn icon="delete_sweep" size="sm" round class="cl_standar" />
		</div>


	
	

		<div class="row">
			<div class="col">
				<q-list bordered separator class="rounded-borders" full-width>
					<q-item clickable v-ripple v-for="ne in news" :key="ne.id">
						<q-item-section avatar>
							<q-avatar>
								<img src="https://cdn.quasar.dev/img/avatar2.jpg">
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label class="q-mt-sm font-md " lines="1">{{ne.name}}</q-item-label>
							<q-item-label class="font-md" caption lines="3">
								{{ne.text}}
							</q-item-label>
							<q-item-label class="text-right font-sm q-mb-md ">{{ne.time}}</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</div>
		</div>
	</div>
</template>


<script>

export default {
	name: 'Home',
	data() {
		return {
			news: [
				{
					id: '1',
					img:'https://cdn.quasar.dev/img/avatar4.jpg',
					name: 'Carlos Castellanos',
					text: 'Realizo una compra en TBTGRILL',
					time: 'Hace 1 minuto',
					},
				{
					id: '2',
					img:'https://cdn.quasar.dev/img/avatar4.jpg',
					name: 'Carlos Castellanos',
					text: 'Realizo una compra en TBTGRILL',
					time: 'Hace 1 minuto',
					},
				{
					id: '3',
					img:'https://cdn.quasar.dev/img/avatar4.jpg',
					name: 'Carlos Castellanos',
					text: 'Realizo una compra en TBTGRILL',
					time: 'Hace 1 minuto',
					}
			]
		}
	}

}
</script>
