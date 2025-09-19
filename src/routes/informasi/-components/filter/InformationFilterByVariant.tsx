import * as React from 'react'

import { InformationSearchLoaderDeps, Route } from '@routes/informasi/index'
import InformationFilterByVariantDropdown from '../dropdown/InformationFilterByVariantDropdown'
import InformationFilterByVariantDropdownTrigger from '../dropdown/InformationFilterByVariantDropdownTrigger'

import { InformationVariant } from '@models/information'

import { findVariantByValue } from '@lib/helper'

const InformationFilterByVariant = () => {
  const [show, setShow] = React.useState(false)

  const filter = Route.useSearch() as InformationSearchLoaderDeps

  const active = findVariantByValue(Number(filter.type)) as InformationVariant

  return (
    <div className="relative flex w-1/2 flex-col gap-2">
      <InformationFilterByVariantDropdown active={active} state={{ show, setShow }} />
      <InformationFilterByVariantDropdownTrigger active={active} state={{ show, setShow }} />
    </div>
  )
}

export default InformationFilterByVariant
