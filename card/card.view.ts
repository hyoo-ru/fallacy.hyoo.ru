namespace $.$$ {
	export class $hyoo_fallacy_card extends $.$hyoo_fallacy_card {

		title() {
			return this.fallacy().title
		}

		tag() {
			return this.tags()[ this.fallacy().tags[0] ]?.title ?? ''
		}

		descr() {
			return this.fallacy().descr
		}

		sample() {
			return this.fallacy().sample
		}

	}
}
