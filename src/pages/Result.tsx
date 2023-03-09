import '../styles/result.css'

interface ResultProps {
	numbers: number[]
}

export function Result({ numbers }: ResultProps) {
	return (
		<div>
			<h1>Resultado</h1>

			<div className="result-grid">
				{
					numbers.map(number => (
						<span className="result-number" key={number}>
							{number}
						</span>
					))
				}
			</div>

			<button onClick={() => location.reload()}>Sortear novamente</button>
		</div>
	)
}
