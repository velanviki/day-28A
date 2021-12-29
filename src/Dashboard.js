


import Card from './card.js'

function Dashboard() {
    
        let details = [
          {
            profit: "Earnings (Monthly)",
            salary: "$40,000"
          },
          {
            profit: "Earnings (Annualy)",
            salary: "$215,000"
          },
          {
            profit: "Task",
            salary: "50%"
          },
          {
            profit: "Pending request ",
            salary: "18"
          }
        ]
    return (
        <> <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div className="row">
        {
              details.map((obj) => {
                        return <Card data={obj}></Card>
              })
            }
        </div>
    </>)
}
export default Dashboard