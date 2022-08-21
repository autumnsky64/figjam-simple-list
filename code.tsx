const { widget } = figma
const { AutoLayout,
Input,
useSyncedState} = widget

function ThreeItemList() {

  const [title, setTitle] = useSyncedState("title","")
  const [items, setItem] = useSyncedState("items",[""])

  return (
    <AutoLayout
      width={320}
      direction="vertical"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      stroke="#ccc"
    >
      <AutoLayout
        width="fill-parent"
        padding={{
          vertical: 16
        }}
        fill="#ada"
      >
        <Input
          value={title}
          width="fill-parent"
          fontSize={24}
          fill="#161"
          horizontalAlignText="center"
          onTextEditEnd={(event)=> setTitle(event.characters)}
          />
      </AutoLayout>
      <AutoLayout
        width="fill-parent"
        padding={{
          vertical: 16,
          bottom:0
        }}
        fill="#fff"
      >
        <Input
          value={items[0]}
          width="fill-parent"
          height={48}
          fontSize={24}
          horizontalAlignText="center"
          onTextEditEnd={(event)=> setItem([event.characters])}
          />
      </AutoLayout>
    </AutoLayout>

  )
}
widget.register(ThreeItemList)