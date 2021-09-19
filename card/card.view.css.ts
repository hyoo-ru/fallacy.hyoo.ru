namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $hyoo_fallacy_card , {

		padding: rem(.75),

		box: {
			shadow: [{
				x: 0,
				y: px(1),
				blur: 0,
				spread: 0,
				color: $mol_theme.line,
			}],
		},

		Main: {
			flex: {
				wrap: "wrap",
			},
			justifyContent: 'space-between',
		},

		Title: {
			textShadow: '0 0 0 currentColor',
			padding: [ rem(.5), rem(.75) ],
			flex: {
				basis: rem(24),
			},
		},

		Tag: {
			padding: [ rem(.5), rem(.75) ],
			flex: {
				basis: rem(16),
			},
		},

		Descr: {
			padding: [ rem(.5), rem(.75) ],
		},

		Sample: {
			padding: [ rem(.5), rem(.75) ],
			font: {
				style: 'italic',
			},
		},

	} )

}
