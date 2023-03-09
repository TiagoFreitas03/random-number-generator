import { useState } from 'react'

import { Generator } from './pages/Generator'
import { Result } from './pages/Result'

export function App() {
	const [generated, setGenerated] = useState<number[]>([])

	return generated.length === 0 ?
		<Generator onGenerate={randomNumbers => setGenerated(randomNumbers)} /> :
		<Result numbers={generated} />
}
