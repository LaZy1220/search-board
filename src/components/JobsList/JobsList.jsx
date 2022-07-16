

export function JobsList(){
    const jobs = [{
        id: 1,
        company: "Photosnap",
        logo: "./images/photosnap.svg",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["HTML", "CSS", "JavaScript"],
        tools: []
      },]
      const list = [].concat(jobs[0].languages)
      console.log(list);
    return(
        <div className=" flex justify-between h-40 w-2/3 bg-white drop-shadow-lg ml-60 rounded-xl">
            <div>
                <img/>

            </div>
            <div>
                {
                    jobs.map(job=>job.languages.map(l=><li>{l}</li>))
                }
            </div>
        </div>
    )
}