import { render } from "react-dom";
import "./styles.css";
import * as React from "react";
import { extend } from "@syncfusion/ej2-base";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-kanban";
import { SampleBase } from "./sample-base";
import * as dataSource from "./datasource.json";
import App from "./App";

/**
 * Kanban Default sample
 */
export class Default extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.kanbanData, null, true);
  }
  render() {
    return (
      <>
      <App />,
      <div className="flex flex-grow flex-col bg-white panelboard">  
        <div className="mt-3 px-4 max-height-test mb-8">
          <div className="kanban-control-section">
            <div className="col-lg-12 control-section">
              <div className="control-wrapper">
                <KanbanComponent
                  id="kanban"
                  keyField="Status"

                  dataSource={this.data}
                  cardSettings={{
                    contentField: "Summary",
                    headerField: "Id",
                    // tagsField: "Tags",
                    grabberField: "Color",
                    footerCssField: "ClassName"
                  }}
                >
                  <ColumnsDirective>
                    <ColumnDirective headerText="open" keyField="Open" />
                    <ColumnDirective
                      headerText="Contacted"
                      keyField="InProgress"
                    />
                    <ColumnDirective headerText="Written Test" keyField="Testing" />
                    <ColumnDirective headerText="Technical" keyField="Close" />
                  </ColumnsDirective>
                </KanbanComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
      
      

render(<Default />, document.getElementById("root"));
