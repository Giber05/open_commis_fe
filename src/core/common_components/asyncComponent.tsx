import React, { Component } from "react";
import Nprogress from "nprogress";
import ReactPlaceholder from "react-placeholder";
import "nprogress/nprogress.css";
import CircularLoadingIndicator from "./CircularLoadingIndicator";

export default function asyncComponent(importComponent: any) {
    type State = {
        component: any | null;
    }
    type Props = {

    }
    class AsyncFunc extends Component<Props, State> {
        private mounted = false;

        public readonly state: State = {
          component: null,
        }

        UNSAFE_componentWillMount() {
          Nprogress.start();
        }

        componentWillUnmount() {
          this.mounted = false;
        }

        async componentDidMount() {
          this.mounted = true;
          const { default: Component } = await importComponent();
          Nprogress.done();
          if (this.mounted) {
            this.setState({
              component: <Component {...this.props} />,
            });
          }
        }

        public render() {
          const Component = this.state.component || <CircularLoadingIndicator />;
          return (
            <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
              {Component}
            </ReactPlaceholder>
          );
        }
    }
    return React.createElement(AsyncFunc);
}
