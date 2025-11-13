const FeatureFlagComponent = (
    {shown = false, children} : {shown: boolean, children: React.ReactNode}
) => {
  return (
    <>
    {shown ? children : null}
    </>
  )
}

export default FeatureFlagComponent
