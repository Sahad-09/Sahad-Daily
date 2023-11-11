"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";
import '@/app/globals.css'

const Paginate = ({data}: any) => {

    const itemsPerPage = 6;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };


    return (
        <>
          <div className="flex justify-center items-center max-w-full">
              <div className="flex flex-col w-[80%]">
            {Array.isArray(currentItems) ? (
              currentItems.map((value, index) => (
                <div key={index} className="pt-4">
                  <div className="self-center">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                      <figure>
                        <Image src={value.image} alt="blog" width={250} height={300} />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{value.title}</h2>
                        <p>{value.description}</p>
                        <div className="card-actions justify-end">
                          <Link href="/blogs/Elon">
                            <button className="btn btn-outline btn-info">Read More</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              ) : (
                  <div>No items to display</div>
                  )}
                  <div className=" self-center py-14">
                  <ReactPaginate
  breakLabel="..."
  nextLabel="next >"
  onPageChange={handlePageClick}
  pageRangeDisplayed={3}
  pageCount={pageCount}
  previousLabel="< previous"
  renderOnZeroPageCount={null}
  containerClassName="pagination"
  pageLinkClassName="pagination-link"
  previousLinkClassName="pagination-previous"
  nextLinkClassName="pagination-next"
  disabledClassName="pagination-disabled"
  activeClassName="active"
  activeLinkClassName="active"
/>
                  </div>
          </div>
        </div>
        </>
      );
            }
export default Paginate