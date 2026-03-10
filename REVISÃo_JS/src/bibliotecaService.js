import { pool } from "./config.js";

export async function buscarLivroPorId(livroId) {
    const [rows] = await pool.query ("SELECT * from livros WHERE id=?",
        [livroId]
    )
    console.log(rows)
    return rows
}

//Não precisa de id e create at
//Criara função cadastrar livro
export async function buscarLivroPorId(titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo) {
    const [rows] = await pool.query ("INSERT * FROM livros WHERE titulo=?, categoria=?, valor_unitario=?, estoque_minimo=?, estoque_maximo=?",
        [titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo]
    )
    console.log(rows)
    return rows
}