import React from 'react'

export default function Datatable({weather}) {
    const columns=weather[0] && Object.keys(weather);
    return <table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>
                {weather[0] && columns.map((heading)=>
                {
                    <th>{heading}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {
                weather.map(row=>
                    {
                        <tr>
                            {
                                columns.map(column=><tr>
                                    {
                                        row[column]
                                    }
                                    </tr>
                                    )
                            }
                        </tr>
                    })
            }
        </tbody>
    </table>
      
    
}
