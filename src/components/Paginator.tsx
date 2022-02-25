import React from 'react'

export default function Paginator(props: {
    page: number,
    lastPage: number,
    pageChanged: (page: number) => void,
}) {

    const next = () => {
        if (props.page < props.lastPage) {
            props.pageChanged(props.page + 1);
        }
    }

    const prev = () => {
        if (props.page >= 1) {
            props.pageChanged(props.page - 1);
        }
    }
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href='#' onClick={prev}>Previous</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href='#' onClick={next}>Next</a>
                </li>
            </ul>
        </nav>
    )
}
