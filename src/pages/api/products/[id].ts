import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../../database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    //Obtendo o ID dos parâmetros da rota
    const { id } = req.query

    //Obtendo um produto específico do array
    const product = products.find(prod => prod.id === Number(id))
    res.status(200).json(product)
}