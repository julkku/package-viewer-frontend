import React from 'react'
import PackageList from './PackageList'
import Button from 'react-bootstrap/Button'

const PackageView = ({ currentPackage, packages, setCurrentPackage }) => {
  if (currentPackage === '') return ''
  if (packages[currentPackage] === undefined) {
    setCurrentPackage('')
    return ''
  }
  const packageInfo = packages[currentPackage]

  const dependencies = packageInfo['Dependencies']
  const reverseDependencies = packageInfo['Reverse dependencies']
  const description = packageInfo['Description']
  const unavailable = packageInfo['Unavailable dependencies']

  const h2Style = {
    whiteSpace: 'pre-line'
  }

  const backButton = {
    float: 'right',
  }

  const h3Style = {
    marginTop: '10px'
  }

  return (
    <div>
      <h2 style={h2Style}>{currentPackage}</h2>
      <p>
        <i style={h2Style}>{description}</i>
      </p>

      {(dependencies.length > 0 || unavailable.length > 0) && (
        <h3 style={h3Style}>Dependencies</h3>
      )}
      <PackageList list={dependencies} setCurrentPackage={setCurrentPackage} />
      <PackageList
        list={unavailable}
        setCurrentPackage={() => {}}
        disabled={true}
      />

      {reverseDependencies.length > 0 && (
        <h3 style={h3Style}>Reverse Dependencies</h3>
      )}
      <PackageList
        list={reverseDependencies}
        setCurrentPackage={setCurrentPackage}
      />
      <Button
        style={backButton}
        variant="dark"
        onClick={() => setCurrentPackage('')}
      >
        Back
      </Button>
    </div>
  )
}

export default PackageView
