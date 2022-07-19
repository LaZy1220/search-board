import data from '../../data.json'
import { Card } from './Card/Card'

export function JobsList(){
    return(
        <>
            {data.map(item => (
              <Card key={item.id} {...item} />
            ))}
        </>
    )
}