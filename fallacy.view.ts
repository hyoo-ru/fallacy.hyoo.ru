namespace $.$$ {
	export class $hyoo_fallacy extends $.$hyoo_fallacy {

		@ $mol_mem
		pages() {
			return [
				this.Menu(),
				this.Content( this.filter() ),
			]
		}

		filter() {
			return this.$.$mol_state_arg.value( 'filter' ) ?? ''
		}

		search( next? : string ) {
			return this.$.$mol_state_arg.value( 'search' , next ) ?? ''
		}

		@ $mol_mem
		filters() {
			return [
				this.All(),
				... Object.keys( this.tags() ).map( tag => this.Filter( tag ) )
			]
		}

		filter_arg( tag : string ) {
			return { filter : tag }
		}

		filter_title( tag : string ) {
			return this.tags()[ tag ].title
		}

		fallacy( id : string ) {
			return this.fallacies()[ id ]
		}

		@ $mol_mem
		fallacies_filtered() {

			const all = this.fallacies()

			const filter = this.filter()
			const search = this.search()
			
			let ids = Object.keys( all ) as ( keyof typeof all )[]
			
			ids = ids.filter( id => {
				
				const fallacy = all[ id ]

				if( filter ) {
					if( !fallacy.tags.includes( filter ) ) return false
				}
				
				return true
			} )
			
			ids = ids.filter( $mol_match_text( search , id => [
				all[id].title,
				all[id].descr,
				all[id].sample,
			] ) )
			
			return ids
		}

		cards() {
			return this.fallacies_filtered().map( id => this.Card( id ) )
		}

		content_title( filter : string ) {
			return this.tags()[ filter ]?.title ?? super.title()
		}

	}
}
