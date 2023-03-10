import { FormEvent, useState } from "react"

import { Input } from "../components/Input"
import '../styles/generator.css'

interface GeneratorProps {
	onGenerate: (result: number[]) => void
}

export function Generator({ onGenerate }: GeneratorProps) {
	const [amount, setAmount] = useState(1)
	const [min, setMin] = useState(1)
	const [max, setMax] = useState(100)

	function handleGenerateFormSubmit(e: FormEvent) {
		e.preventDefault()

		if (max < min) {
			alert('Informe um intervalo válido')
			return
		}

		if (amount > (max - min + 1)) {
			alert('Informe uma quantidade menor')
			return
		}

		const aux: number[] = []
		const numbers = Array.from({ length: max - min + 1 }, (_, index) => min + index)

		while (aux.length !== amount) {
			const pos = Math.floor(Math.random() * numbers.length)
			const num = numbers[pos]

			numbers.splice(pos, 1)
			aux.push(num)
		}

		onGenerate(aux)
	}

	return (
		<div>
			<h1>Sorteador de números</h1>

			<form onSubmit={handleGenerateFormSubmit}>
				<label>
					Sortear
					<Input value={amount} onChange={e => setAmount(Number(e.target.value))} min={1} />
					número(s)
				</label>

				<div>
					<label>Mínimo: </label>
					<Input value={min} onChange={e => setMin(Number(e.target.value))} min={0} />
				</div>

				<div>
					<label>Máximo: </label>
					<Input value={max} onChange={e => setMax(Number(e.target.value))} min={1} max={100000} />
				</div>

				<button type="submit">Sortear</button>
			</form>
		</div>
	)
}
