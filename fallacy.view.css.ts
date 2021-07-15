namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_fallacy , {

		Menu: {
			flex: {
				basis: rem(20),
			},
		},

		Content: {
			
			flex: {
				basis: rem(60),
			},
			
			Body: {
				padding: 0,
			},

		},

		Cards_empty: {
			padding: [ rem(1.25), rem(1.5) ],
		},

		Feedback: {
			padding: [ rem(.75), rem(1.5) ],
			flex: {
				grow: 1,
			},
		},

	} )

}
