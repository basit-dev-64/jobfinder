import React , {useState}from 'react'
import { JobCard } from './JobCard';
import ReactPaginate from 'react-paginate';

import classes from './Joblist.module.css'
/**
* @author
* @function JobList
**/

export const JobList = (props) => {

  const jobs = props.jobs
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(3)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = jobs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);

  };
  return(
   <>
   <div className={classes.joblists}>
   {currentItems.map(job=> <JobCard title={job.title} company={job.company} location={job.location} jd={job.jd} link={job.link} logo={job.company_logo} />)}
   </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
      />
    </>
   )

 }