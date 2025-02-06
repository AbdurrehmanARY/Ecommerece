import React from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { Separator } from '../ui/separator'

import { Fragment } from 'react'
function Filter() {
// const filterOption={
//     category:[{id:"gaming",label:"gaming"},{id:"camera",label:"camera"}],
//     brand:[ {id:"samsung",label:"samsung"},{id:"Xiome",label:"xiome"},
//         {id:"realme",label:"realme"},{id:"infinix",label:"infinix"},{id:"techno",label:"techno"},{id:"bluebarry",label:"bluebarry"}]

// }
const filterOption={
    category:[{id:"gaming",label:"gaming"},{id:"camera",label:"camera"}],
    brand:[ {id:"samsung",label:"samsung"},{id:"Xiome",label:"xiome"},
        {id:"realme",label:"realme"},{id:"infinix",label:"infinix"},{id:"techno",label:"techno"},{id:"bluebarry",label:"bluebarry"}]

}
  return (
    <div className="bg-background rounded-lg shadow-sm">
    <div className="p-4 border-b">
      <h2 className="text-lg font-extrabold">Filters</h2>
    </div>
    <div className="p-4 space-y-4">
      {Object.keys(filterOption).map((keyItem) => (
        <Fragment>
          <div>
            <h3 className="text-base font-bold">{keyItem}</h3>
            <div className="grid gap-2 mt-2">
              {filterOption[keyItem].map((option) => (
                <Label className="flex font-medium items-center gap-2 ">
                  <Checkbox  
                  />
                  {option.label}
                </Label>
              ))}
            </div>
          </div>
          <Separator />
        </Fragment>
      ))}
    </div>
  </div>
  )
}

export default Filter