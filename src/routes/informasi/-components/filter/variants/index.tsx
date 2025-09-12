import * as React from 'react'

import Dropdown from '@routes/informasi/-components/filter/variants/Dropdown'
import Trigger from '@routes/informasi/-components/filter/variants/Trigger'
import { InformationSearchLoaderDeps, Route } from '@routes/informasi/index'

import { findVariantByValue } from '@lib/helper'
import { INFORMATION_VARIANTS } from '@static/information'

const VariantFilter = () => {
  const [show, setShow] = React.useState(false)

  const filter = Route.useSearch() as InformationSearchLoaderDeps

  const active = findVariantByValue(Number(filter.type), INFORMATION_VARIANTS)

  return (
    <div className="relative flex w-1/2 flex-col gap-2">
      <Trigger active={active} state={{ show, setShow }} />
      <Dropdown active={active} state={{ show, setShow }} />
    </div>
  )
}

export default VariantFilter
