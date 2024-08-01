function Table(){
    return(
        <table class="border-collapse border-spacing-80 border  w-full mt-2 bg-blue-100">
        <thead>
          <tr className="bg-blue-300">
            <th className="p-3  border border-slate-300 ">Action</th>
            <th className="p-3  border border-slate-300 ">Member Code</th>
            <th className="p-3  border border-slate-300 ">Fullname</th>
            <th className="p-3  border border-slate-300 ">Phone</th>
            <th className="p-3  border border-slate-300 ">Address</th>
            <th className="p-3  border border-slate-300 ">Start Date</th>
            <th className="p-3  border border-slate-300 ">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="p-3 border border-slate-300">View</td>
            <td className="p-3 border border-slate-300">Code</td>
            <td className="p-3 border border-slate-300">Jonh Doe</td>
            <td className="p-3 border border-slate-300">01223456</td>
            <td className="p-3 border border-slate-300">Phnom Penh</td>
            <td className="p-3 border border-slate-300">30-jul-24</td>
            <td className="p-3 border border-slate-300">45-57-24</td>
            
          </tr>
          <tr>
            <td className="p-3 border border-slate-300 ">View</td>
            <td className="p-3 border border-slate-300 ">Code</td>
            <td className="p-3 border border-slate-300 ">Jonh Doe</td>
            <td className="p-3 border border-slate-300 ">01223456</td>
            <td className="p-3 border border-slate-300 ">Phnom Penh</td>
            <td className="p-3 border border-slate-300 ">30-jul-24</td>
            <td className="p-3 border border-slate-300 ">45-57-24</td>
          </tr>
           */}
         
          
        </tbody>
      </table>
    )
}export default Table;