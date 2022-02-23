(function chess() {
	const chessBoard = document.querySelector('.chessboard');

	for (let i = 0; i < 8; i++) {
		const row = document.createElement('div');
		for (let h = 0; h < 8; h++) {
			const cell = document.createElement('div');
			if (i % 2 === h % 2) {
				cell.classList.add("white");
			} else {
				cell.classList.add("black");
			}
			row.appendChild(cell);
		}
		chessBoard.appendChild(row);
	}
}) ();
