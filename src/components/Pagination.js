import ReactPaginate from 'react-paginate'
const Pagination = ({colorsperpage,current,setcurrent,colordata}) => {
    return (
        <ReactPaginate
            className="pagination justify-content-center my-5  gap-3"
            //forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            pageCount={colordata.length/colorsperpage}
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            onPageChange={(data) => {
                
                setcurrent(data.selected)
                
            }

            }

            activeClassName="active"

        />
    );
}

export default Pagination;