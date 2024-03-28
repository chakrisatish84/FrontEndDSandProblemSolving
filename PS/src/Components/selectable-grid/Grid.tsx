import { useCallback, useState } from "react";

export type SelectableGridProps = {
  rows: number;
  cols: number;
};
export const SelectableGrid = ({ rows, cols }: SelectableGridProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const handelMouseDown = (cellNumber: number) => {
    setIsMouseDown(true);
    setSelectedCells([cellNumber]);
  };

  const handelMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = useCallback(
    (cellNumber: number) => {
      if (isMouseDown) {
        const startCell = selectedCells[0];
        const endCell = cellNumber;

        const startRow = Math.floor((startCell - 1) / cols); //start cell is the item where we entered mouse down
        const startCol = (startCell - 1) % cols;

        const endRow = Math.floor((endCell - 1) / cols);
        const endCol = Math.floor((endCell - 1) % cols);

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);

        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minCol; col <= maxCol; col++) {
            selected.push(row * cols + col + 1);
          }
        }

        setSelectedCells(selected);
      }
    },
    [isMouseDown]
  );

  return (
    <div className="grid" onMouseUp={() => handelMouseUp()}>
      {[...Array(rows * cols).keys()].map((_, index: number) => {
        return (
          <div
            className={`cell ${
              selectedCells.includes(index + 1) ? "selected" : ""
            }`}
            key={index}
            style={{ "--rows": rows, "--cols": cols }}
            onMouseDown={() => handelMouseDown(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
