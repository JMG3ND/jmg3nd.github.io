<template>
	<!--Block-->
	<nav class="main-menu">
		<ul class="main-menu__list">
			<li class="main-menu__content-item main-menu__content-item--hamburguer">
				<div class="main-menu__content-item-head">
					<a class="main-menu__item" href="#">
						<span class="main-menu__text">CUBOS</span>
					</a>
					<button class="main-menu__button"><font-awesome-icon icon="fa-solid fa-caret-down" /></button>
				</div>
				<div class="main-menu__sub-menu-container">
					<!--Block-->
					<SubMenu />
				</div>
			</li>
			<li class="main-menu__content-item-head"><a class="main-menu__item" href="#">TIENDA</a></li>
		</ul>
	</nav>
</template>

<script>
import SubMenu from '@/components/SubMenu.vue'

export default {
	name: 'MainMenu',
	components: {
		SubMenu
	},
	mounted() {
		this.asignarEvento();
	},
	methods: {
		asignarEvento() {
			const mainMenuButton = document.querySelectorAll(".main-menu__content-item--hamburguer");
			mainMenuButton.forEach(element => {
				element.children[0].children[1].addEventListener("click", () => {
					element.classList.toggle('main-menu__content-item--active');
				})
			});
		}
	}
}
</script>

<style lang="scss">
@import '@/components/scssglobal/_colors-theme.scss';

@media screen and (min-width: 851px) {
	.main-menu {
		display: flex;
		gap: 1rem;

		&__list {
			display: flex;
			text-decoration: none;
			list-style-type: none;
		}

		&__item {
			position: relative;
			display: block;
			text-decoration: none;
			padding: 15px;
			border-radius: 5PX;

			&:hover {
				background-color: $dark-bagraund-color-top-level-entry-hover;

				body.light & {
					background-color: $light-bagraund-color-top-level-entry-hover;
				}
			}
		}

		/*&__text{}*/
		&__button {
			display: none;
		}

		&__sub-menu-container {
			display: none;
			position: absolute;
		}

		&__content-item:hover &__sub-menu-container {
			display: flex;
		}
	}
}

@media screen and (max-width: 850px) {
	.main-menu {
		gap: 1rem;

		&__list {
			text-decoration: none;
			list-style-type: none;
		}

		&__item {
			position: relative;
			display: inline-block;
			align-items: center;
			justify-content: space-between;
			text-decoration: none;
			padding: 15px;
		}

		&__content-item-head {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 30px;
		}

		&__content-item--active &__content-item-head {
			background-color: $dark-bagraund-color-top-level-entry-hover;

			body.light & {
				background-color: $light-bagraund-color-top-level-entry-hover;
			}
		}

		/*&__text{}*/
		&__button {
			background-color: $dark-baground-color-z-index-1;

			body.light & {
				background-color: $light-baground-color-z-index-1;
			}

			border-radius: 24px;
			width: 30px;
			height: 30px;
			border: none;
			transform: rotate(-90deg);
		}

		&__content-item--active &__button {
			transform: rotate(0deg);
		}

		&__sub-menu-container {
			position: unset;
			display: flex;
			width: 100%;
			height: 1px;
			overflow: hidden;
		}

		&__content-item--active &__sub-menu-container {
			height: auto;
		}
	}
}
</style>