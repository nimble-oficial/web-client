"use client"

import React, { useCallback, useMemo } from "react"
import { Transforms, createEditor } from "slate"
import { Editable, Slate, withReact } from "slate-react"

import { cn } from "@/lib/utils"

interface EditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  limit?: number
  value: string
}

const Editor = React.forwardRef<HTMLTextAreaElement, EditorProps>(
  (
    { value, limit = 2000, onChange, className, placeholder, ...props },
    ref
  ) => {
    const reachedLimit = (value?.toString()?.length || 0) >= limit
    const editor = useMemo(() => withReact(createEditor()), [])

    const renderElement = useCallback((props) => {
      switch (props.element.type) {
        case "paragraph":
          return <p {...props.attributes}>{props.children}</p>
        case "heading":
          return <h2 {...props.attributes}>{props.children}</h2>
        default:
          return <p {...props.attributes}>{props.children}</p>
      }
    }, [])

    const initialValue = [
      {
        type: "paragraph",
        children: [{ text: value || "" }],
      },
    ]

    const Element = (props) => {
      const { attributes, children, element } = props
      switch (element.type) {
        case "mention":
          return <Mention {...props} />
        default:
          return <p {...attributes}>{children}</p>
      }
    }

    const Leaf = ({ attributes, children, leaf }) => {
      if (leaf.bold) {
        children = <strong>{children}</strong>
      }

      if (leaf.code) {
        children = <code>{children}</code>
      }

      if (leaf.italic) {
        children = <em>{children}</em>
      }

      if (leaf.underline) {
        children = <u>{children}</u>
      }

      return <span {...attributes}>{children}</span>
    }

    const withMentions = (editor) => {
      const { isInline, isVoid, markableVoid } = editor

      editor.isInline = (element) => {
        return element.type === "mention" ? true : isInline(element)
      }

      editor.isVoid = (element) => {
        return element.type === "mention" ? true : isVoid(element)
      }

      editor.markableVoid = (element) => {
        return element.type === "mention" || markableVoid(element)
      }

      return editor
    }

    const insertMention = (editor, character) => {
      const mention = {
        type: "mention",
        character,
        children: [{ text: "" }],
      }
      Transforms.insertNodes(editor, mention)
      Transforms.move(editor)
    }

    const Mention = ({ attributes, children, element }) => {
      const selected = useSelected()
      const focused = useFocused()
      const style: React.CSSProperties = {
        padding: "3px 3px 2px",
        margin: "0 1px",
        verticalAlign: "baseline",
        display: "inline-block",
        borderRadius: "4px",
        backgroundColor: "#eee",
        fontSize: "0.9em",
        boxShadow: selected && focused ? "0 0 0 2px #B4D5FF" : "none",
      }
      // See if our empty text child has any styling marks applied and apply those
      if (element.children[0].bold) {
        style.fontWeight = "bold"
      }
      if (element.children[0].italic) {
        style.fontStyle = "italic"
      }
      return (
        <span
          {...attributes}
          contentEditable={false}
          data-cy={`mention-${element.character.replace(" ", "-")}`}
          style={style}
        >
          @{element.character}
          {children}
        </span>
      )
    }

    return (
      <div>
        <Slate editor={editor} initialValue={initialValue}>
          <Editable
            value={value}
            renderElement={renderElement}
            onKeyDown={(event) => {
              const isPressingEnter = event.key === "Enter"

              if (isPressingEnter) {
                event.preventDefault()
                Transforms.insertText(editor, "\n")
              }
            }}
            className={cn(
              "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          />
          <p
            className={cn(
              "mt-2 text-right text-sm text-slate-500 dark:text-slate-300",
              reachedLimit ? "text-red-800" : ""
            )}
          >
            {value?.toString()?.length || 0}/{limit}
          </p>
        </Slate>
      </div>
    )
  }
)
Editor.displayName = "Editor"

export { Editor }
