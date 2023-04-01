import React from 'react'

function Cerchas() {
    const meshes = [];
	for (let i = 0; i < count; i++) {
		const x = i * (ancho + spacing); // Posición X del prisma
		meshes.push(
		<PrismGeometry
			key={i}
			position={[x, 0, 0]}
			width={ancho}
			height={altura}
			depth={longitud}
		/>
		);
	}

	return meshes;
}

export default Cerchas
