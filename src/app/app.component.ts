import { Component, Input } from "@angular/core";
import { Edge, Node, Layout } from "@swimlane/ngx-graph";
import { DagreNodesOnlyLayout } from "./customDagreNodesOnly";
import * as shape from "d3-shape";

export class Employee {
  id: string;
  name: string;
  office: string;
  role: string;
  backgroundColor: string;
  upperManagerId?: string;
  lowerManagerId?: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Input() employees: Employee[] = [];

  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: "LR"
  };
  public curve: any = shape.curveBasis;
  public layout: Layout = new DagreNodesOnlyLayout();

  constructor() {
    this.employees = [
      {
        id: "14",
        name: "Employee 13",
        office: "Office 1",
        role: "Manager",
        backgroundColor: "yellow"
      },
      {
        id: "1",
        name: "Employee 1",
        office: "Office 1",
        role: "Manager",
        backgroundColor: "#DC143C"
      },
      {
        id: "2",
        name: "Employee 2",
        office: "Office 2",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "1"
      },
      {
        id: "3",
        name: "Employee 3",
        office: "Office 3",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "1"
      },
      {
        id: "4",
        name: "Employee 4",
        office: "Office 4",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "1"
      },

      {
        id: "5",
        name: "Employee 5",
        office: "Office 5",
        role: "Student",
        backgroundColor: "#8A2BE2",
        lowerManagerId: "1"
      },
      {
        id: "6",
        name: "Employee 6",
        office: "Office 6",
        role: "Student",
        backgroundColor: "#8A2BE2",
        lowerManagerId: "5"
      },
      {
        id: "7",
        name: "Employee 4",
        office: "Office 4",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "1"
      },
      {
        id: "8",
        name: "Employee 4",
        office: "Office 4",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "1"
      },
      {
        id: "9",
        name: "Employee 4",
        office: "Office 4",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "4"
      },
      {
        id: "10",
        name: "Employee 4",
        office: "Office 4",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "3"
      },
      {
        id: "11",
        name: "Employee 4",
        office: "Office 4",
        role: "Engineer",
        backgroundColor: "#00FFFF",
        upperManagerId: "2"
      }
    ];
  }

  public ngOnInit(): void {
    for (const employee of this.employees) {
      const node: Node = {
        id: employee.id,
        label: employee.name,
        data: {
          office: employee.office,
          role: employee.role,
          backgroundColor: employee.backgroundColor
        }
      };

      this.nodes.push(node);
    }

    for (const employee of this.employees) {
      if (!employee.upperManagerId && !employee.lowerManagerId) {
        continue;
      }

      const source = employee.upperManagerId
        ? employee.upperManagerId
        : employee.id;
      const target = employee.upperManagerId
        ? employee.id
        : employee.lowerManagerId;

      const edge: Edge = {
        source: source,
        target: target,
        data: {
          invertArrow: !employee.upperManagerId && employee.lowerManagerId
        }
      };

      this.links.push(edge);
    }
  }

  public getStyles(node: Node): any {
    return {
      "background-color": node.data.backgroundColor
    };
  }

  public test(data) {
    alert("You have clicked on " + data.label);
    console.log(data);
  }
}
