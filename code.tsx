const { widget } = figma
const { AutoLayout, Input, Frame, useSyncedState, usePropertyMenu } = widget

function SimpleList() {
  const [title, setTitle] = useSyncedState("title", "")
  const [items, setItem] = useSyncedState("items", ["", "", ""])

  usePropertyMenu(
    [
      { itemType: "action", tooltip: "Add Row", propertyName: "addRow" },
      {
        itemType: "action",
        tooltip: "Delete Row",
        propertyName: "deleteLastRow"
      }
    ],
    ({ propertyName }) => {
      if (propertyName === "addRow") {
        setItem((current) => [...current, ""])
      } else if (propertyName === "deleteLastRow") {
        setItem((current) => {
          const newData = [...current]
          newData.pop()
          return newData
        })
      }
    }
  )
  const borderColor = "#696969"
  const titleBgColor = "#e0ffff"

  return (
    <AutoLayout
      width={320}
      direction="vertical"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      stroke={borderColor}
    >
      <AutoLayout
        width="fill-parent"
        padding={{
          vertical: 16
        }}
        fill={titleBgColor}
        stroke={titleBgColor}
      >
        <Input
          placeholder="title"
          value={title}
          width="fill-parent"
          fontSize={24}
          horizontalAlignText="center"
          onTextEditEnd={(event) => setTitle(event.characters)}
        />
      </AutoLayout>
      {items.map((item, i) => {
        return (
          <>
            <Frame
              height={1}
              width="fill-parent"
              name="Border"
              fill={borderColor}
            ></Frame>
            <AutoLayout
              width="fill-parent"
              padding={{
                vertical: 16,
                bottom: 0
              }}
              fill="#fff"
            >
              <Input
                value={item}
                width="fill-parent"
                height={48}
                fontSize={24}
                horizontalAlignText="center"
                onTextEditEnd={(event) => {
                  const newItems = [...items]
                  newItems[i] = event.characters
                  setItem(newItems)
                }}
              />
            </AutoLayout>
          </>
        )
      })}
    </AutoLayout>
  )
}
widget.register(SimpleList)