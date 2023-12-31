import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [Disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        setDisciplinas(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('disciplinas')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('disciplinas', JSON.stringify(itens))
            setDisciplinas(itens)
        }
    }

    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplinas/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Curso</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {Disciplinas.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/disciplinas/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index