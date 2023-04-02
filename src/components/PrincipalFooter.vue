<template>
	<footer class="footer justify-elements-in-screen">
		<nav class="footer__nav justify-elements-in-screen__container">
			<ul class="social-networks-list">
				<li class="social-networks-list__item-container"></li><a class="social-networks-list__item"
					href="#"><font-awesome-icon class="fa-brands fa-facebook" icon="fa-brands fa-facebook" /><span
						class="social-networks-list__text social-networks-list__text--facebook">Facebook</span></a>
				<li class="social-networks-list__item-container"></li><a class="social-networks-list__item"
					href="#"><font-awesome-icon class="fa-brands fa-twitter" icon="fa-brands fa-twitter" /><span
						class="social-networks-list__text social-networks-list__text--twitter">Twitter</span></a>
				<li class="social-networks-list__item-container"></li><a class="social-networks-list__item"
					href="#"><font-awesome-icon class="fa-brands fa-instagram" icon="fa-brands fa-instagram" /><span
						class="social-networks-list__text social-networks-list__text--instagram">Instagram</span></a>
				<li class="social-networks-list__item-container"></li><a class="social-networks-list__item"
					href="#"><font-awesome-icon class="fa-brands fa-youtube" icon="fa-brands fa-youtube" /><span
						class="social-networks-list__text social-networks-list__text--youtube">Youtube</span></a>
				<li class="social-networks-list__item-container"></li><a class="social-networks-list__item"
					href="#"><font-awesome-icon class="fa-brands fa-whatsapp" icon="fa-brands fa-whatsapp" /><span
						class="social-networks-list__text social-networks-list__text--whatsapp">Whatsapp</span></a>
			</ul>
		</nav>
	</footer>
</template>

<script>
export default {
	name: 'PrincipalFooter'
}
</script>

<style lang="scss">
@import 'scssglobal/colors-theme.scss';

.footer {
	background-color: $dark-baground-color-z-index-1;

	body.light & {
		background-color: $light-baground-color-z-index-1;
	}

	&__nav {
		display: flex;
		align-items: center;
		justify-content: end;
	}
}

@media screen and (max-width: 850px) {
	.footer {
		&__nav {
			justify-content: center;
		}
	}
}

@media screen and (min-width: 851px) {
	.social-networks-list {
		list-style-type: none;
		display: flex;
		margin: 1rem;

		* {
			background-color: transparent;
		}

		&__item {
			text-decoration: none;
			display: flex;
			font-size: x-large;
			align-items: center;
			border-radius: 5px;
			padding: 5px;

			&:hover {

				.fa-facebook,
				.social-networks-list__text--facebook {
					color: #077ae9;
				}

				.fa-twitter,
				.social-networks-list__text--twitter {
					color: #1c99e6;
				}

				.fa-instagram,
				.social-networks-list__text--instagram {
					color: #c30073;
				}

				.fa-youtube,
				.social-networks-list__text--youtube {
					color: #f10002;
				}

				.fa-whatsapp,
				.social-networks-list__text--whatsapp {
					color: #1acc3e;
				}
			}

		}

		.fa-brands {
			width: 2rem;
			padding: 5px;
		}

		&__text {
			width: 0;
			overflow: hidden;
			transition: 0.3s;

			.social-networks-list__item:hover & {
				width: 6rem;
			}
		}
	}
}

@media screen and (max-width: 850px) {
	.social-networks-list {
		list-style-type: none;
		margin: 1rem;
		display: flex;

		* {
			background-color: transparent;
		}

		&__item {
			text-decoration: none;
			display: flex;
			font-size: x-large;
			align-items: center;
			border-radius: 5px;
			padding: 5px;
		}

		.fa-brands {
			width: 2rem;
			padding: 5px;
		}

		&__text {
			width: 0;
			overflow: hidden;
			transition: 0.3s;
		}
	}
}
</style>