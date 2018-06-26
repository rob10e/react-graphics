declare namespace acgraph {
  function circle(cx?: number, cy?: number, radius?: number): acgraph.vector.Circle;
  function clip(leftorRect?: number | Array<number> | acgraph.math.Rect | Object, top?: number, width?: number, height?: number): acgraph.vector.Clip;
  function create(container?: Element | string, width?: string | number, height?: string | number): acgraph.vector.Stage;
  function ellipse(cx?: number, cy?: number, rx?: number, ry?: number): acgraph.vector.Ellipse;
  function hatchFill(type?: acgraph.vector.HatchFill.HatchFillType, color?: string, thickness?: number, size?: number): acgraph.vector.HatchFill;
  function image(src?: string, x?: number, y?: number, width?: number, height?: number): acgraph.vector.Image;
  function layer(): acgraph.vector.Layer;
  function path(): acgraph.vector.Path;
  function patternFill(bounds: acgraph.math.Rect): acgraph.vector.PatternFill;
  function rect(x?: number, y?: number, width?: number, height?: number): acgraph.vector.Rect;
  function server(address?: string): string;
  function text(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
  function type(): acgraph.StageType;
  function updateReferences(): void;
  function useAbsoluteReferences(value?: boolean): boolean;
  enum StageType {
      SVG,
      VML
  }
}

declare namespace acgraph.events {
  function listen(target: acgraph.vector.Element, type: string | Array<string>, listener: (() => void) | Object, capture?: boolean, handler?: Object): Object;
  function listenOnce(target: acgraph.vector.Element, type: string | Array<string>, listener: (() => void) | Object, capture?: boolean, handler?: Object): Object;
  function removeAll(target: acgraph.vector.Element, type?: string): number;
  function unlisten(target: acgraph.vector.Element, type: string | Array<string>, listener: (() => void) | Object, capture?: boolean, handler?: Object): boolean;
  function unlistenByKey(key: Object): boolean;
  enum EventType {
      CLICK,
      CONTEXTMENU,
      DBLCLICK,
      DRAG,
      DRAG_BEFORE,
      DRAG_EARLY_CANCEL,
      DRAG_END,
      DRAG_START,
      MOUSEDOWN,
      MOUSEMOVE,
      MOUSEOUT,
      MOUSEOVER,
      MOUSEUP,
      TAP,
      TOUCHCANCEL,
      TOUCHEND,
      TOUCHMOVE,
      TOUCHSTART
  }
  interface BrowserEvent {
      preventDefault(): void;
      stopPropagation(): void;
      stopWrapperPropagation(): void;
  }
}

declare namespace acgraph.math {
  interface Rect {
      getBottom(): number;
      getHeight(): number;
      getLeft(): number;
      getRight(): number;
      getTop(): number;
      getWidth(): number;
  }
}

declare namespace acgraph.vector {
  function normalizeFill(fillOrColorOrKeys?: acgraph.vector.Fill | Array<acgraph.vector.GradientKey|string>, opacityOrAngleOrCx?: number, modeOrCy?: number | boolean | acgraph.math.Rect | Object, opacityOrMode?: number | acgraph.math.Rect | Object, opacity?: number, fx?: number, fy?: number): acgraph.vector.Fill;
  function normalizeHatchFill(patternFillOrType?: acgraph.vector.HatchFill | acgraph.vector.PatternFill | acgraph.vector.HatchFill.HatchFillType | string | Object, color?: string, thickness?: string | number, size?: string | number): acgraph.vector.PatternFill | acgraph.vector.HatchFill;
  function normalizeStroke(strokeOrFill?: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string, thickness?: number, dashpattern?: string, lineJoin?: string | acgraph.vector.StrokeLineJoin, lineCap?: string | acgraph.vector.StrokeLineCap): acgraph.vector.Stroke;
  type GradientKey = {
      color: string;
      offset: number;
      opacity: number;
  }
  type SolidFill = {
      color: string;
      opacity: number;
  }
  type LinearGradientFill = {
      angle?: number;
      keys: Array<acgraph.vector.GradientKey|string>;
      mode?: boolean | acgraph.math.Rect;
      opacity?: number;
  }
  type RadialGradientFill = {
      cx: number;
      cy: number;
      fx: number;
      fy: number;
      keys: Array<acgraph.vector.GradientKey|string>;
      mode: acgraph.math.Rect;
      opacity: number;
  }
  type ImageFill = {
      mode: acgraph.vector.ImageFillMode | string;
      opacity: number;
      src: string;
  }
  type ColoredFill = string | acgraph.vector.SolidFill | acgraph.vector.LinearGradientFill | acgraph.vector.RadialGradientFill;
  type Fill = string | acgraph.vector.ImageFill | acgraph.vector.SolidFill | acgraph.vector.LinearGradientFill | acgraph.vector.RadialGradientFill | acgraph.vector.PatternFill;
  type SolidStroke = {
      color: string;
      dash: string;
      lineCap: string;
      lineJoin: string;
      opacity: number;
      thickness: number;
  }
  type LinearGradientStroke = {
      angle: number;
      dash: string;
      keys: Array<acgraph.vector.GradientKey|string>;
      lineCap: string;
      lineJoin: string;
      mode: boolean | acgraph.math.Rect;
      opacity: number;
      thickness: number;
  }
  type RadialGradientStroke = {
      cx: number;
      cy: number;
      dash: string;
      fx: number;
      fy: number;
      keys: Array<acgraph.vector.GradientKey|string>;
      lineCap: string;
      lineJoin: string;
      mode: acgraph.math.Rect;
      opacity: number;
      thickness: number;
  }
  type Stroke = string | acgraph.vector.SolidStroke | acgraph.vector.LinearGradientStroke | acgraph.vector.RadialGradientStroke;
  type AnyColor = acgraph.vector.Fill | acgraph.vector.Stroke | acgraph.vector.PatternFill;
  type TextStyle = {
      color: string;
      decoration: acgraph.vector.Text.Decoration | string;
      direction: acgraph.vector.Text.Direction | string;
      fontFamily: string;
      fontSize: string | number;
      fontStyle: acgraph.vector.Text.FontStyle | string;
      fontVariant: acgraph.vector.Text.FontVariant | string;
      fontWeight: number | string;
      hAlign: acgraph.vector.Text.HAlign | string;
      height: number | string;
      letterSpacing: string;
      lineHeight: string | number;
      opacity: number;
      selectable: boolean;
      textIndent: number;
      textOverflow: acgraph.vector.Text.TextOverflow;
      vAlign: acgraph.vector.Text.VAlign | string;
      width: number | string;
      wordBreak: string;
      wordWrap: string;
  }
  type TextSegmentStyle = {
      color: string;
      decoration: string;
      fontFamily: string;
      fontSize: string | number;
      fontStyle: string;
      fontVariant: string;
      fontWeight: number | string;
      letterSpacing: string;
      opacity: number;
  }
  enum Anchor {
      AUTO,
      CENTER,
      CENTER_BOTTOM,
      CENTER_TOP,
      LEFT_BOTTOM,
      LEFT_CENTER,
      LEFT_TOP,
      RIGHT_BOTTOM,
      RIGHT_CENTER,
      RIGHT_TOP
  }
  enum Cursor {
      CROSSHAIR,
      DEFAULT,
      EW_RESIZE,
      E_RESIZE,
      HELP,
      MOVE,
      NESW_RESIZE,
      NE_RESIZE,
      NS_RESIZE,
      NWSE_RESIZE,
      NW_RESIZE,
      N_RESIZE,
      POINTER,
      SE_RESIZE,
      SW_RESIZE,
      S_RESIZE,
      TEXT,
      WAIT,
      W_RESIZE
  }
  enum StrokeLineJoin {
      BEVEL,
      MITER,
      ROUND
  }
  enum StrokeLineCap {
      BUTT,
      ROUND,
      SQUARE
  }
  enum ImageFillMode {
      FIT,
      FIT_MAX,
      STRETCH,
      TILE
  }
  enum PaperSize {
      A0,
      A1,
      A2,
      A3,
      A4,
      A5,
      A6,
      US_LETTER
  }
  interface LinearGradient {
      dispose(): void;
  }
  interface Shape extends acgraph.vector.Element {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Shape;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Shape;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Shape;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Shape;
      desc(): string;
      desc(value?: string): acgraph.vector.Shape;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Shape;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Shape;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Shape;
      fill(): acgraph.vector.Fill;
      fill(value: acgraph.vector.Fill): acgraph.vector.Shape;
      fill(color: string, opacity?: number): acgraph.vector.Shape;
      fill(keys: Array<acgraph.vector.GradientKey|string>, angle?: number, mode?: boolean | acgraph.vector.Rect | Object, opacity?: number): acgraph.vector.Shape;
      fill(keys: Array<acgraph.vector.GradientKey|string>, cx: number, cy: number, mode?: acgraph.math.Rect, opacity?: number, fx?: number, fy?: number): acgraph.vector.Shape;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.Shape;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Shape;
      remove(): acgraph.vector.Shape;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Shape;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Shape;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Shape;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Shape;
      setPosition(x: number, y: number): acgraph.vector.Shape;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Shape;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Shape;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Shape;
      stroke(): acgraph.vector.Stroke;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string): void;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string, thickness?: number, dashpattern?: string, lineJoin?: string | acgraph.vector.StrokeLineJoin, lineCap?: string | acgraph.vector.StrokeLineCap): acgraph.vector.Shape;
      strokeThickness(): number;
      strokeThickness(value?: number): acgraph.vector.Shape;
      title(): string;
      title(value?: string): acgraph.vector.Shape;
      translate(tx: number, ty: number): acgraph.vector.Shape;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Shape;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Shape;
      unlistenByKey(key: Object): boolean;
  }
  interface Stage {
      addChild(element: acgraph.vector.Element): acgraph.vector.Stage;
      addChildAt(element: acgraph.vector.Element, index: number): acgraph.vector.Stage;
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Stage;
      asyncMode(): boolean;
      asyncMode(value?: boolean): acgraph.vector.Stage;
      circle(cx?: number, cy?: number, radius?: number): acgraph.vector.Circle;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect): acgraph.vector.Stage;
      container(): Element;
      container(value?: Element): acgraph.vector.Stage;
      createClip(rect?: Array<number> | acgraph.math.Rect | Object): acgraph.vector.Clip;
      createClip(left?: number, top?: number, width?: number, height?: number): acgraph.vector.Clip;
      credits(value?: Object | boolean): acgraph.vector.Stage;
      cross(): void;
      data(): Object;
      data(value?: Object): acgraph.vector.Stage;
      desc(): string;
      desc(value?: string): acgraph.vector.Stage;
      diagonalCross(): void;
      diamond(): void;
      dispose(): void;
      domElement(): Element;
      donut(): void;
      ellipse(cx?: number, cy?: number, rx?: number, ry?: number): acgraph.vector.Ellipse;
      forEachChild(callback: (() => void), obj?: Object): acgraph.vector.Stage;
      getBounds(): acgraph.math.Rect;
      getChildAt(index: number): acgraph.vector.Element;
      getContainerElement(): Element;
      getDomWrapper(): Element;
      getJpgBase64String(onSuccess: (() => void), onError?: (() => void), width?: number, height?: number, quality?: number, forceTransparentWhite?: boolean): void;
      getPdfBase64String(onSuccess: (() => void), onError?: (() => void), paperSizeOrWidth?: number | string, landscapeOrWidth?: number | boolean, x?: number, y?: number): void;
      getPngBase64String(onSuccess: (() => void), onError?: (() => void), width?: number, height?: number, quality?: number): void;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getSvgBase64String(onSuccess: (() => void), onError?: (() => void), paperSizeOrWidth?: string | number, landscapeOrHeight?: boolean | string): void;
      getTransformationMatrix(): Array<number>;
      getX(): number;
      getY(): number;
      hLine(): void;
      hasChild(element: acgraph.vector.Element): boolean;
      hatchFill(type?: acgraph.vector.HatchFill.HatchFillType, color?: string, thickness?: number, size?: number): acgraph.vector.HatchFill;
      height(): number;
      height(value?: string | number): acgraph.vector.Stage;
      html(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      id(): string;
      id(value?: string): acgraph.vector.Stage;
      image(src?: string, x?: number, y?: number, width?: number, height?: number): acgraph.vector.Image;
      indexOfChild(element: acgraph.vector.Element): number;
      isRendering(): boolean;
      isSuspended(): boolean;
      layer(): acgraph.vector.Layer;
      listen(type: string | acgraph.vector.Stage.EventType, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string | acgraph.vector.Stage.EventType, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      maxResizeDelay(): number;
      maxResizeDelay(value?: number): acgraph.vector.Stage;
      numChildren(): number;
      parent(): acgraph.vector.Stage;
      path(): acgraph.vector.Path;
      pattern(bounds: acgraph.math.Rect): acgraph.vector.PatternFill;
      pie(): void;
      print(paperSizeOrWidth?: string | number, landscapeOrHeight?: boolean | string): void;
      rect(x?: number, y?: number, width?: number, height?: number): acgraph.vector.Rect;
      remove(): acgraph.vector.Stage;
      removeAllListeners(type?: string): number;
      removeChild(element: acgraph.vector.Element): acgraph.vector.Element;
      removeChildAt(index: number): acgraph.vector.Element;
      removeChildren(): Array<acgraph.vector.Element>;
      resize(width: number | string, height: number | string): void;
      resume(force?: boolean): acgraph.vector.Stage;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Stage;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Stage;
      saveAsJpg(width?: number, height?: number, quality?: number, forceTransparentWhite?: boolean, filename?: string): void;
      saveAsPdf(paperSize?: string, landscape?: boolean, x?: number, y?: number, filename?: string): void;
      saveAsPng(width?: number, height?: number, quality?: number, filename?: string): void;
      saveAsSvg(paperSize?: string, landscape?: boolean, filename?: string): void;
      saveAsSvg(width?: number, height?: number): void;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Stage;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Stage;
      setPosition(x: number, y: number): acgraph.vector.Stage;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Stage;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Stage;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Stage;
      shareAsJpg(onSuccess: (() => void), onError?: (() => void), asBase64?: boolean, width?: number, height?: number, quality?: number, forceTransparentWhite?: boolean, filename?: string): void;
      shareAsPdf(onSuccess: (() => void), onError?: (() => void), asBase64?: boolean, paperSizeOrWidth?: number | string, landscapeOrWidth?: number | boolean, x?: number, y?: number, filename?: string): void;
      shareAsPng(onSuccess: (() => void), onError?: (() => void), asBase64?: boolean, width?: number, height?: number, quality?: number, filename?: string): void;
      shareAsSvg(onSuccess: (() => void), onError?: (() => void), asBase64?: boolean, paperSizeOrWidth?: string | number, landscapeOrHeight?: boolean | string, filename?: string): void;
      star(): void;
      star10(): void;
      star4(): void;
      star5(): void;
      star6(): void;
      star7(): void;
      suspend(): acgraph.vector.Stage;
      swapChildren(element1: acgraph.vector.Element, element2: acgraph.vector.Element): acgraph.vector.Stage;
      swapChildrenAt(index1: number, index2: number): acgraph.vector.Stage;
      text(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      title(): string;
      title(value?: string): acgraph.vector.Stage;
      toSvg(paperSize?: string, landscape?: boolean): string;
      toSvg(width?: number, height?: number): string;
      translate(tx: number, ty: number): acgraph.vector.Stage;
      triangleDown(): void;
      triangleLeft(): void;
      triangleRight(): void;
      triangleUp(): void;
      unlisten(type: string | acgraph.vector.Stage.EventType, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      unlistenByKey(key: Object): boolean;
      vLine(): void;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Stage;
      width(): number;
      width(value?: string | number): acgraph.vector.Stage;
  }
  namespace Stage {
  enum EventType {
      RENDER_FINISH,
      RENDER_START,
      STAGE_RENDERED,
      STAGE_RESIZE
  }
  }
  interface PatternFill extends acgraph.vector.Layer {
      addChild(element: acgraph.vector.Element): acgraph.vector.PatternFill;
      addChildAt(element: acgraph.vector.Element, index: number): acgraph.vector.PatternFill;
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.PatternFill;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.PatternFill;
      circle(cx?: number, cy?: number, radius?: number): acgraph.vector.Circle;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.PatternFill;
      cross(): void;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.PatternFill;
      desc(): string;
      desc(value?: string): acgraph.vector.PatternFill;
      diagonalCross(): void;
      diamond(): void;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.PatternFill;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.PatternFill;
      dispose(): void;
      domElement(): Element;
      donut(): void;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.PatternFill;
      ellipse(cx?: number, cy?: number, rx?: number, ry?: number): acgraph.vector.Ellipse;
      forEachChild(callback: (() => void)): acgraph.vector.PatternFill;
      forEachChild(callback: (() => void), obj?: Object): acgraph.vector.PatternFill;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getChildAt(index: number): acgraph.vector.PatternFill;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hLine(): void;
      hasChild(element: acgraph.vector.Element): boolean;
      hasParent(): boolean;
      html(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      id(): string;
      id(value?: string): acgraph.vector.PatternFill;
      image(src?: string, x?: number, y?: number, width?: number, height?: number): acgraph.vector.Image;
      indexOfChild(element: acgraph.vector.Element): number;
      layer(): acgraph.vector.PatternFill;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      numChildren(): number;
      parent(): acgraph.vector.PatternFill | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.PatternFill;
      path(): acgraph.vector.Path;
      pie(): void;
      rect(x?: number, y?: number, width?: number, height?: number): acgraph.vector.Rect;
      remove(): acgraph.vector.PatternFill;
      removeAllListeners(type?: string): number;
      removeChild(element: acgraph.vector.Element): acgraph.vector.PatternFill;
      removeChildAt(index: number): acgraph.vector.PatternFill;
      removeChildren(): Array<acgraph.vector.Element>;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.PatternFill;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.PatternFill;
      roundedInnerRect(): void;
      roundedRect(): void;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.PatternFill;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.PatternFill;
      setPosition(x: number, y: number): acgraph.vector.PatternFill;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.PatternFill;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.PatternFill;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.PatternFill;
      star(): void;
      star10(): void;
      star4(): void;
      star5(): void;
      star6(): void;
      star7(): void;
      swapChildren(element1: acgraph.vector.Element, element2: acgraph.vector.Element): acgraph.vector.PatternFill;
      swapChildrenAt(index1: number, index2: number): acgraph.vector.PatternFill;
      text(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      title(): string;
      title(value?: string): acgraph.vector.PatternFill;
      translate(tx: number, ty: number): acgraph.vector.PatternFill;
      triangleDown(): void;
      triangleLeft(): void;
      triangleRight(): void;
      triangleUp(): void;
      truncatedRect(): void;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      vLine(): void;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.PatternFill;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.PatternFill;
      unlistenByKey(key: Object): boolean;
  }
  interface RadialGradient {
      dispose(): void;
  }
  interface Circle extends acgraph.vector.Ellipse {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Circle;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Circle;
      centerX(): number;
      centerX(value?: number): acgraph.vector.Circle;
      centerY(): number;
      centerY(value?: number): acgraph.vector.Circle;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Circle;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Circle;
      desc(): string;
      desc(value?: string): acgraph.vector.Circle;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Circle;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Circle;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Circle;
      fill(): acgraph.vector.Fill;
      fill(value: acgraph.vector.Fill): acgraph.vector.Circle;
      fill(color: string, opacity?: number): acgraph.vector.Circle;
      fill(keys: Array<acgraph.vector.GradientKey|string>, angle?: number, mode?: boolean | acgraph.vector.Rect | Object, opacity?: number): acgraph.vector.Circle;
      fill(keys: Array<acgraph.vector.GradientKey|string>, cx: number, cy: number, mode?: acgraph.math.Rect, opacity?: number, fx?: number, fy?: number): acgraph.vector.Circle;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.Circle;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Circle;
      radius(): number;
      radius(value?: number): acgraph.vector.Circle;
      radiusX(): number;
      radiusX(value?: number): acgraph.vector.Circle;
      radiusY(): number;
      radiusY(value?: number): acgraph.vector.Circle;
      remove(): acgraph.vector.Circle;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Circle;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Circle;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Circle;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Circle;
      setPosition(x: number, y: number): acgraph.vector.Circle;
      setRadius(rx: number, ry: number): acgraph.vector.Circle;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Circle;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Circle;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Circle;
      stroke(): acgraph.vector.Stroke;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string): void;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string, thickness?: number, dashpattern?: string, lineJoin?: string | acgraph.vector.StrokeLineJoin, lineCap?: string | acgraph.vector.StrokeLineCap): acgraph.vector.Circle;
      strokeThickness(): number;
      strokeThickness(value?: number): acgraph.vector.Circle;
      title(): string;
      title(value?: string): acgraph.vector.Circle;
      translate(tx: number, ty: number): acgraph.vector.Circle;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Circle;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Circle;
      unlistenByKey(key: Object): boolean;
  }
  interface UnmanagedLayer extends acgraph.vector.Element {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.UnmanagedLayer;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.UnmanagedLayer;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.UnmanagedLayer;
      content(): Element | string;
      content(value?: string | Element): acgraph.vector.UnmanagedLayer;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.UnmanagedLayer;
      desc(): string;
      desc(value?: string): acgraph.vector.UnmanagedLayer;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.UnmanagedLayer;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.UnmanagedLayer;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.UnmanagedLayer;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.UnmanagedLayer;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.UnmanagedLayer;
      remove(): acgraph.vector.UnmanagedLayer;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.UnmanagedLayer;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.UnmanagedLayer;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.UnmanagedLayer;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.UnmanagedLayer;
      setPosition(x: number, y: number): acgraph.vector.UnmanagedLayer;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.UnmanagedLayer;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.UnmanagedLayer;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.UnmanagedLayer;
      title(): string;
      title(value?: string): acgraph.vector.UnmanagedLayer;
      translate(tx: number, ty: number): acgraph.vector.UnmanagedLayer;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.UnmanagedLayer;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.UnmanagedLayer;
      unlistenByKey(key: Object): boolean;
  }
  interface Rect extends acgraph.vector.Shape {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Rect;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Rect;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Rect;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Rect;
      cut(radiusAll: string | number): acgraph.vector.Rect;
      cut(radiusLeftTop: number, radiusRightTop?: number, radiusRightBottom?: number, radiusLeftBottom?: number): acgraph.vector.Rect;
      desc(): string;
      desc(value?: string): acgraph.vector.Rect;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Rect;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Rect;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Rect;
      fill(): acgraph.vector.Fill;
      fill(value: acgraph.vector.Fill): acgraph.vector.Rect;
      fill(color: string, opacity?: number): acgraph.vector.Rect;
      fill(keys: Array<acgraph.vector.GradientKey|string>, angle?: number, mode?: boolean | acgraph.vector.Rect | Object, opacity?: number): acgraph.vector.Rect;
      fill(keys: Array<acgraph.vector.GradientKey|string>, cx: number, cy: number, mode?: acgraph.math.Rect, opacity?: number, fx?: number, fy?: number): acgraph.vector.Rect;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.Rect;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Rect;
      remove(): acgraph.vector.Rect;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Rect;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Rect;
      round(radiusAll: string | number): acgraph.vector.Rect;
      round(radiusLeftTop: number, radiusRightTop?: number, radiusRightBottom?: number, radiusLeftBottom?: number): acgraph.vector.Rect;
      roundInner(radiusAll: string | number): acgraph.vector.Rect;
      roundInner(radiusLeftTop: number, radiusRightTop?: number, radiusRightBottom?: number, radiusLeftBottom?: number): acgraph.vector.Rect;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Rect;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Rect;
      setBounds(value: acgraph.math.Rect): acgraph.vector.Rect;
      setHeight(value: number): acgraph.vector.Rect;
      setPosition(x: number, y: number): acgraph.vector.Rect;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Rect;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Rect;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Rect;
      setWidth(value: number): acgraph.vector.Rect;
      setX(value: number): acgraph.vector.Rect;
      setY(value: number): acgraph.vector.Rect;
      stroke(): acgraph.vector.Stroke;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string): void;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string, thickness?: number, dashpattern?: string, lineJoin?: string | acgraph.vector.StrokeLineJoin, lineCap?: string | acgraph.vector.StrokeLineCap): acgraph.vector.Rect;
      strokeThickness(): number;
      strokeThickness(value?: number): acgraph.vector.Rect;
      title(): string;
      title(value?: string): acgraph.vector.Rect;
      translate(tx: number, ty: number): acgraph.vector.Rect;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Rect;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Rect;
      unlistenByKey(key: Object): boolean;
  }
  interface Layer extends acgraph.vector.Element {
      addChild(element: acgraph.vector.Element): acgraph.vector.Layer;
      addChildAt(element: acgraph.vector.Element, index: number): acgraph.vector.Layer;
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Layer;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Layer;
      circle(cx?: number, cy?: number, radius?: number): acgraph.vector.Circle;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Layer;
      cross(): void;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Layer;
      desc(): string;
      desc(value?: string): acgraph.vector.Layer;
      diagonalCross(): void;
      diamond(): void;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Layer;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Layer;
      dispose(): void;
      domElement(): Element;
      donut(): void;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Layer;
      ellipse(cx?: number, cy?: number, rx?: number, ry?: number): acgraph.vector.Ellipse;
      forEachChild(callback: (() => void)): acgraph.vector.Layer;
      forEachChild(callback: (() => void), obj?: Object): acgraph.vector.Layer;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getChildAt(index: number): acgraph.vector.Layer;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hLine(): void;
      hasChild(element: acgraph.vector.Element): boolean;
      hasParent(): boolean;
      html(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      id(): string;
      id(value?: string): acgraph.vector.Layer;
      image(src?: string, x?: number, y?: number, width?: number, height?: number): acgraph.vector.Image;
      indexOfChild(element: acgraph.vector.Element): number;
      layer(): acgraph.vector.Layer;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      numChildren(): number;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Layer;
      path(): acgraph.vector.Path;
      pie(): void;
      rect(x?: number, y?: number, width?: number, height?: number): acgraph.vector.Rect;
      remove(): acgraph.vector.Layer;
      removeAllListeners(type?: string): number;
      removeChild(element: acgraph.vector.Element): acgraph.vector.Layer;
      removeChildAt(index: number): acgraph.vector.Layer;
      removeChildren(): Array<acgraph.vector.Element>;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Layer;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Layer;
      roundedInnerRect(): void;
      roundedRect(): void;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Layer;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Layer;
      setPosition(x: number, y: number): acgraph.vector.Layer;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Layer;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Layer;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Layer;
      star(): void;
      star10(): void;
      star4(): void;
      star5(): void;
      star6(): void;
      star7(): void;
      swapChildren(element1: acgraph.vector.Element, element2: acgraph.vector.Element): acgraph.vector.Layer;
      swapChildrenAt(index1: number, index2: number): acgraph.vector.Layer;
      text(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      title(): string;
      title(value?: string): acgraph.vector.Layer;
      translate(tx: number, ty: number): acgraph.vector.Layer;
      triangleDown(): void;
      triangleLeft(): void;
      triangleRight(): void;
      triangleUp(): void;
      truncatedRect(): void;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      vLine(): void;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Layer;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Layer;
      unlistenByKey(key: Object): boolean;
  }
  interface Path extends acgraph.vector.Shape {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Path;
      arcTo(rx: number, ry: number, fromAngle: number, extent: number): acgraph.vector.Path;
      arcToAsCurves(rx: number, ry: number, fromAngle: number, extent: number): acgraph.vector.Path;
      arcToByEndPoint(x: number, y: number, rx: number, ry: number, largeArc: boolean, clockwiseArc: boolean): acgraph.vector.Path;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Path;
      circularArc(cx: number, cy: number, rx: number, ry: number, fromAngle: number, sweep: number, lineTo?: boolean): acgraph.vector.Path;
      clear(): acgraph.vector.Path;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Path;
      close(): acgraph.vector.Path;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Path;
      curveTo(control1X: number, control1Y: number, control2X: number, control2Y: number, endX: number, endY: number, ...var_args: (number)[]): acgraph.vector.Path;
      desc(): string;
      desc(value?: string): acgraph.vector.Path;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Path;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Path;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Path;
      fill(): acgraph.vector.Fill;
      fill(value: acgraph.vector.Fill): acgraph.vector.Path;
      fill(color: string, opacity?: number): acgraph.vector.Path;
      fill(keys: Array<acgraph.vector.GradientKey|string>, angle?: number, mode?: boolean | acgraph.vector.Rect | Object, opacity?: number): acgraph.vector.Path;
      fill(keys: Array<acgraph.vector.GradientKey|string>, cx: number, cy: number, mode?: acgraph.math.Rect, opacity?: number, fx?: number, fy?: number): acgraph.vector.Path;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getLength(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.Path;
      lineTo(x: number, y: number, ...var_args: (number)[]): acgraph.vector.Path;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      moveTo(x: number, y: number): acgraph.vector.Path;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Path;
      quadraticCurveTo(controlX: number, controlY: number, endX: number, endY: number, ...var_args: (number)[]): acgraph.vector.Path;
      remove(): acgraph.vector.Path;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Path;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Path;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Path;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Path;
      setPosition(x: number, y: number): acgraph.vector.Path;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Path;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Path;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Path;
      stroke(): acgraph.vector.Stroke;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string): void;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string, thickness?: number, dashpattern?: string, lineJoin?: string | acgraph.vector.StrokeLineJoin, lineCap?: string | acgraph.vector.StrokeLineCap): acgraph.vector.Path;
      strokeThickness(): number;
      strokeThickness(value?: number): acgraph.vector.Path;
      title(): string;
      title(value?: string): acgraph.vector.Path;
      translate(tx: number, ty: number): acgraph.vector.Path;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Path;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Path;
      unlistenByKey(key: Object): boolean;
  }
  interface Element {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Element;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Element;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Element;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Element;
      desc(): string;
      desc(value?: string): acgraph.vector.Element;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Element;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Element;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Element;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.Element;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Element;
      remove(): acgraph.vector.Element;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Element;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Element;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Element;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Element;
      setPosition(x: number, y: number): acgraph.vector.Element;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Element;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Element;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Element;
      title(): string;
      title(value?: string): acgraph.vector.Element;
      translate(tx: number, ty: number): acgraph.vector.Element;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      unlistenByKey(key: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Element;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Element;
  }
  interface Image extends acgraph.vector.Element {
      align(): acgraph.vector.Image.Align;
      align(value?: acgraph.vector.Image.Align): acgraph.vector.Image;
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Image;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Image;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Image;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Image;
      desc(): string;
      desc(value?: string): acgraph.vector.Image;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Image;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Image;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Image;
      fittingMode(): acgraph.vector.Image.Fitting;
      fittingMode(value?: acgraph.vector.Image.Fitting | string): acgraph.vector.Image;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      height(): number;
      height(value?: number): acgraph.vector.Image;
      id(): string;
      id(value?: string): acgraph.vector.Image;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Image;
      remove(): acgraph.vector.Image;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Image;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Image;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Image;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Image;
      setPosition(x: number, y: number): acgraph.vector.Image;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Image;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Image;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Image;
      src(): string;
      src(value?: string): acgraph.vector.Image;
      title(): string;
      title(value?: string): acgraph.vector.Image;
      translate(tx: number, ty: number): acgraph.vector.Image;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Image;
      width(): number;
      width(value?: number): acgraph.vector.Image;
      x(): number;
      x(value?: number): acgraph.vector.Image;
      y(): number;
      y(value?: number): acgraph.vector.Image;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Image;
      unlistenByKey(key: Object): boolean;
  }
  namespace Image {
  enum Fitting {
      MEET,
      SLICE
  }
  enum Align {
      NONE,
      X_MAX_Y_MAX,
      X_MAX_Y_MID,
      X_MAX_Y_MIN,
      X_MID_Y_MAX,
      X_MID_Y_MID,
      X_MID_Y_MIN,
      X_MIN_Y_MAX,
      X_MIN_Y_MID,
      X_MIN_Y_MIN
  }
  }
  interface HatchFill extends acgraph.vector.PatternFill {
      addChild(element: acgraph.vector.Element): acgraph.vector.HatchFill;
      addChildAt(element: acgraph.vector.Element, index: number): acgraph.vector.HatchFill;
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.HatchFill;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.HatchFill;
      circle(cx?: number, cy?: number, radius?: number): acgraph.vector.Circle;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.HatchFill;
      cross(): void;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.HatchFill;
      desc(): string;
      desc(value?: string): acgraph.vector.HatchFill;
      diagonalCross(): void;
      diamond(): void;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.HatchFill;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.HatchFill;
      dispose(): void;
      domElement(): Element;
      donut(): void;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.HatchFill;
      ellipse(cx?: number, cy?: number, rx?: number, ry?: number): acgraph.vector.Ellipse;
      forEachChild(callback: (() => void)): acgraph.vector.HatchFill;
      forEachChild(callback: (() => void), obj?: Object): acgraph.vector.HatchFill;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getChildAt(index: number): acgraph.vector.HatchFill;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hLine(): void;
      hasChild(element: acgraph.vector.Element): boolean;
      hasParent(): boolean;
      html(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      id(): string;
      id(value?: string): acgraph.vector.HatchFill;
      image(src?: string, x?: number, y?: number, width?: number, height?: number): acgraph.vector.Image;
      indexOfChild(element: acgraph.vector.Element): number;
      layer(): acgraph.vector.HatchFill;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      numChildren(): number;
      parent(): acgraph.vector.HatchFill | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.HatchFill;
      path(): acgraph.vector.Path;
      pie(): void;
      rect(x?: number, y?: number, width?: number, height?: number): acgraph.vector.Rect;
      remove(): acgraph.vector.HatchFill;
      removeAllListeners(type?: string): number;
      removeChild(element: acgraph.vector.Element): acgraph.vector.HatchFill;
      removeChildAt(index: number): acgraph.vector.HatchFill;
      removeChildren(): Array<acgraph.vector.Element>;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.HatchFill;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.HatchFill;
      roundedInnerRect(): void;
      roundedRect(): void;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.HatchFill;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.HatchFill;
      setPosition(x: number, y: number): acgraph.vector.HatchFill;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.HatchFill;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.HatchFill;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.HatchFill;
      star(): void;
      star10(): void;
      star4(): void;
      star5(): void;
      star6(): void;
      star7(): void;
      swapChildren(element1: acgraph.vector.Element, element2: acgraph.vector.Element): acgraph.vector.HatchFill;
      swapChildrenAt(index1: number, index2: number): acgraph.vector.HatchFill;
      text(x?: number, y?: number, text?: string, style?: acgraph.vector.TextStyle): acgraph.vector.Text;
      title(): string;
      title(value?: string): acgraph.vector.HatchFill;
      translate(tx: number, ty: number): acgraph.vector.HatchFill;
      triangleDown(): void;
      triangleLeft(): void;
      triangleRight(): void;
      triangleUp(): void;
      truncatedRect(): void;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      vLine(): void;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.HatchFill;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.HatchFill;
      unlistenByKey(key: Object): boolean;
  }
  namespace HatchFill {
  enum HatchFillType {
      BACKWARD_DIAGONAL,
      CHECKER_BOARD,
      CONFETTI,
      DASHED_BACKWARD_DIAGONAL,
      DASHED_FORWARD_DIAGONAL,
      DASHED_HORIZONTAL,
      DASHED_VERTICAL,
      DIAGONAL_BRICK,
      DIAGONAL_CROSS,
      DIVOT,
      FORWARD_DIAGONAL,
      GRID,
      HORIZONTAL,
      HORIZONTAL_BRICK,
      PERCENT_05,
      PERCENT_10,
      PERCENT_20,
      PERCENT_25,
      PERCENT_30,
      PERCENT_40,
      PERCENT_50,
      PERCENT_60,
      PERCENT_70,
      PERCENT_75,
      PERCENT_80,
      PERCENT_90,
      PLAID,
      SOLID_DIAMOND,
      VERTICAL,
      VERTICAL_BRICK,
      WEAVE,
      ZIG_ZAG
  }
  }
  interface Text extends acgraph.vector.Element {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Text;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Text;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Text;
      color(): string;
      color(value?: string): acgraph.vector.Text;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Text;
      decoration(): string;
      decoration(value?: acgraph.vector.Text.Decoration | string): acgraph.vector.Text;
      desc(): string;
      desc(value?: string): acgraph.vector.Text;
      direction(): string;
      direction(value?: acgraph.vector.Text.Direction | string): acgraph.vector.Text;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Text;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Text;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Text;
      fontFamily(): string;
      fontFamily(value?: string): acgraph.vector.Text;
      fontSize(): string | number;
      fontSize(value?: string | number): acgraph.vector.Text;
      fontStyle(): string;
      fontStyle(value?: acgraph.vector.Text.FontStyle | string): acgraph.vector.Text;
      fontVariant(): string;
      fontVariant(value?: acgraph.vector.Text.FontVariant | string): acgraph.vector.Text;
      fontWeight(): string;
      fontWeight(value?: string | number): acgraph.vector.Text;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hAlign(): string;
      hAlign(value?: acgraph.vector.Text.HAlign | string): acgraph.vector.Text;
      hasParent(): boolean;
      height(): number | string;
      height(value?: number | string): acgraph.vector.Text;
      htmlText(): string;
      htmlText(value?: string): acgraph.vector.Text;
      id(): string;
      id(value?: string): acgraph.vector.Text;
      letterSpacing(): string;
      letterSpacing(value?: string | number): acgraph.vector.Text;
      lineHeight(): string;
      lineHeight(value?: string | number): acgraph.vector.Text;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      opacity(): number;
      opacity(value?: number): acgraph.vector.Text;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Text;
      path(): acgraph.vector.Path;
      path(value?: acgraph.vector.Path): acgraph.vector.Text;
      remove(): acgraph.vector.Text;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Text;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Text;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Text;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Text;
      selectable(): boolean;
      selectable(value?: boolean): acgraph.vector.Text;
      setPosition(x: number, y: number): acgraph.vector.Text;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Text;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Text;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Text;
      style(): acgraph.vector.TextStyle;
      style(value?: acgraph.vector.TextStyle): acgraph.vector.Text;
      text(): string;
      text(value?: string): acgraph.vector.Text;
      textIndent(): number;
      textIndent(value?: number): acgraph.vector.Text;
      textOverflow(): string;
      textOverflow(value?: acgraph.vector.Text.TextOverflow | string): acgraph.vector.Text;
      title(): string;
      title(value?: string): acgraph.vector.Text;
      translate(tx: number, ty: number): acgraph.vector.Text;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      vAlign(): string;
      vAlign(value?: acgraph.vector.Text.VAlign | string): acgraph.vector.Text;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Text;
      width(): number | string;
      width(value?: number | string): acgraph.vector.Text;
      wordBreak(): string | acgraph.vector.Text.WordBreak;
      wordBreak(value?: string | acgraph.vector.Text.WordBreak): acgraph.vector.Text;
      wordWrap(): string | acgraph.vector.Text.WordWrap;
      wordWrap(value?: string | acgraph.vector.Text.WordWrap): string | acgraph.vector.Text;
      x(): number;
      x(value?: number): acgraph.vector.Text;
      y(): number;
      y(value?: number): acgraph.vector.Text;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Text;
      unlistenByKey(key: Object): boolean;
  }
  namespace Text {
  enum WordBreak {
      BREAK_ALL,
      KEEP_ALL,
      NORMAL
  }
  enum WordWrap {
      BREAK_WORD,
      NORMAL
  }
  enum TextOverflow {
      CLIP,
      ELLIPSIS
  }
  enum HAlign {
      CENTER,
      END,
      LEFT,
      RIGHT,
      START
  }
  enum VAlign {
      BOTTOM,
      MIDDLE,
      TOP
  }
  enum Decoration {
      BLINK,
      LINE_THROUGH,
      NONE,
      OVERLINE,
      UNDERLINE
  }
  enum FontVariant {
      NORMAL,
      SMALL_CAP
  }
  enum FontStyle {
      ITALIC,
      NORMAL,
      OBLIQUE
  }
  enum Direction {
      LTR,
      RTL
  }
  }
  interface Ellipse extends acgraph.vector.Shape {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Ellipse;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.Ellipse;
      centerX(): number;
      centerX(value?: number): acgraph.vector.Ellipse;
      centerY(): number;
      centerY(value?: number): acgraph.vector.Ellipse;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.Ellipse;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.Ellipse;
      desc(): string;
      desc(value?: string): acgraph.vector.Ellipse;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.Ellipse;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.Ellipse;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.Ellipse;
      fill(): acgraph.vector.Fill;
      fill(value: acgraph.vector.Fill): acgraph.vector.Ellipse;
      fill(color: string, opacity?: number): acgraph.vector.Ellipse;
      fill(keys: Array<acgraph.vector.GradientKey|string>, angle?: number, mode?: boolean | acgraph.vector.Rect | Object, opacity?: number): acgraph.vector.Ellipse;
      fill(keys: Array<acgraph.vector.GradientKey|string>, cx: number, cy: number, mode?: acgraph.math.Rect, opacity?: number, fx?: number, fy?: number): acgraph.vector.Ellipse;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hasParent(): boolean;
      id(): string;
      id(value?: string): acgraph.vector.Ellipse;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.Ellipse;
      radiusX(): number;
      radiusX(value?: number): acgraph.vector.Ellipse;
      radiusY(): number;
      radiusY(value?: number): acgraph.vector.Ellipse;
      remove(): acgraph.vector.Ellipse;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.Ellipse;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Ellipse;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.Ellipse;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Ellipse;
      setPosition(x: number, y: number): acgraph.vector.Ellipse;
      setRadius(rx: number, ry: number): acgraph.vector.Ellipse;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.Ellipse;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.Ellipse;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.Ellipse;
      stroke(): acgraph.vector.Stroke;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string): void;
      stroke(value: acgraph.vector.Stroke | acgraph.vector.ColoredFill | string, thickness?: number, dashpattern?: string, lineJoin?: string | acgraph.vector.StrokeLineJoin, lineCap?: string | acgraph.vector.StrokeLineCap): acgraph.vector.Ellipse;
      strokeThickness(): number;
      strokeThickness(value?: number): acgraph.vector.Ellipse;
      title(): string;
      title(value?: string): acgraph.vector.Ellipse;
      translate(tx: number, ty: number): acgraph.vector.Ellipse;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.Ellipse;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.Ellipse;
      unlistenByKey(key: Object): boolean;
  }
  interface Clip {
      dispose(): void;
      shape(): acgraph.vector.Shape;
      shape(shape?: Array<number> | acgraph.vector.Shape | acgraph.math.Rect | Object): acgraph.vector.Clip;
      shape(left?: number, top?: number, width?: number, height?: number): acgraph.vector.Clip;
  }
}

declare namespace acgraph.vector.primitives {
  function cross(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function diagonalCross(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function diamond(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function donut(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, cx: number, cy: number, outerR: number, innerR: number, start: number, sweep: number): acgraph.vector.Path;
  function hLine(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function pie(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, cx: number, cy: number, r: number, start: number, sweep: number): acgraph.vector.Path;
  function roundedInnerRect(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, rect: acgraph.math.Rect, ...var_args: (number)[]): acgraph.vector.Path;
  function roundedRect(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, rect: acgraph.math.Rect, ...var_args: (number)[]): acgraph.vector.Path;
  function star(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number, innerRadius: number, numberOfSpikes: number, startDegrees?: number, curvature?: number): acgraph.vector.Path;
  function star10(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function star4(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function star5(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function star6(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function star7(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function triangleDown(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function triangleLeft(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function triangleRight(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function triangleUp(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
  function truncatedRect(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, rect: acgraph.math.Rect, ...var_args: (number)[]): acgraph.vector.Path;
  function vLine(stageOrPath: acgraph.vector.Stage | acgraph.vector.Path, centerX: number, centerY: number, outerRadius: number): acgraph.vector.Path;
}

declare namespace acgraph.vector.vml {
  interface Text extends acgraph.vector.Text {
      appendTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.vml.Text;
      attr(key: string): any;
      attr(key: string, value?: any): acgraph.vector.vml.Text;
      clip(): acgraph.math.Rect;
      clip(value?: acgraph.math.Rect | string): acgraph.vector.vml.Text;
      color(): string;
      color(value?: string): acgraph.vector.vml.Text;
      cursor(): acgraph.vector.Cursor;
      cursor(value?: acgraph.vector.Cursor): acgraph.vector.vml.Text;
      decoration(): string;
      decoration(value?: acgraph.vector.Text.Decoration | string): acgraph.vector.vml.Text;
      desc(): string;
      desc(value?: string): acgraph.vector.vml.Text;
      direction(): string;
      direction(value?: acgraph.vector.Text.Direction | string): acgraph.vector.vml.Text;
      disablePointerEvents(): boolean;
      disablePointerEvents(value?: boolean): acgraph.vector.vml.Text;
      disableStrokeScaling(): boolean;
      disableStrokeScaling(value?: boolean): acgraph.vector.vml.Text;
      dispose(): void;
      domElement(): Element;
      drag(): boolean | acgraph.math.Rect;
      drag(value?: boolean | acgraph.math.Rect): acgraph.vector.vml.Text;
      fontFamily(): string;
      fontFamily(value?: string): acgraph.vector.vml.Text;
      fontSize(): string | number;
      fontSize(value?: string | number): acgraph.vector.vml.Text;
      fontStyle(): string;
      fontStyle(value?: acgraph.vector.Text.FontStyle | string): acgraph.vector.vml.Text;
      fontVariant(): string;
      fontVariant(value?: acgraph.vector.Text.FontVariant | string): acgraph.vector.vml.Text;
      fontWeight(): string;
      fontWeight(value?: string | number): acgraph.vector.vml.Text;
      getAbsoluteBounds(): acgraph.math.Rect;
      getAbsoluteHeight(): number;
      getAbsoluteWidth(): number;
      getAbsoluteX(): number;
      getAbsoluteY(): number;
      getBounds(): acgraph.math.Rect;
      getHeight(): number;
      getRotationAngle(): number;
      getStage(): acgraph.vector.Stage;
      getTransformationMatrix(): Array<number>;
      getWidth(): number;
      getX(): number;
      getY(): number;
      hAlign(): string;
      hAlign(value?: acgraph.vector.Text.HAlign | string): acgraph.vector.vml.Text;
      hasParent(): boolean;
      height(): number | string;
      height(value?: number | string): acgraph.vector.vml.Text;
      htmlText(): string;
      htmlText(value?: string): acgraph.vector.vml.Text;
      id(): string;
      id(value?: string): acgraph.vector.vml.Text;
      letterSpacing(): string;
      letterSpacing(value?: string | number): acgraph.vector.vml.Text;
      lineHeight(): string;
      lineHeight(value?: string | number): acgraph.vector.vml.Text;
      listen(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      listenOnce(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): Object;
      opacity(): number;
      opacity(value?: number): acgraph.vector.vml.Text;
      parent(): acgraph.vector.Layer | acgraph.vector.Stage;
      parent(value?: acgraph.vector.Layer | acgraph.vector.Stage): acgraph.vector.vml.Text;
      remove(): acgraph.vector.vml.Text;
      removeAllListeners(type?: string): number;
      rotate(degrees: number, cx?: number, cy?: number): acgraph.vector.vml.Text;
      rotateByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.vml.Text;
      scale(sx: number, sy: number, cx?: number, cy?: number): acgraph.vector.vml.Text;
      scaleByAnchor(sx: number, sy: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.vml.Text;
      selectable(): boolean;
      selectable(value?: boolean): acgraph.vector.vml.Text;
      setPosition(x: number, y: number): acgraph.vector.vml.Text;
      setRotation(degrees: number, cx?: number, cy?: number): acgraph.vector.vml.Text;
      setRotationByAnchor(degrees: number, anchor?: acgraph.vector.Anchor | string): acgraph.vector.vml.Text;
      setTransformationMatrix(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): acgraph.vector.vml.Text;
      style(): acgraph.vector.TextStyle;
      style(value?: acgraph.vector.TextStyle): acgraph.vector.vml.Text;
      text(): string;
      text(value?: string): acgraph.vector.vml.Text;
      textIndent(): number;
      textIndent(value?: number): acgraph.vector.vml.Text;
      textOverflow(): string;
      textOverflow(value?: acgraph.vector.Text.TextOverflow | string): acgraph.vector.vml.Text;
      title(): string;
      title(value?: string): acgraph.vector.vml.Text;
      translate(tx: number, ty: number): acgraph.vector.vml.Text;
      unlisten(type: string, listener: (() => void), useCapture?: boolean, listenerScope?: Object): boolean;
      vAlign(): string;
      vAlign(value?: acgraph.vector.Text.VAlign | string): acgraph.vector.vml.Text;
      visible(): boolean;
      visible(isVisible?: boolean): acgraph.vector.vml.Text;
      width(): number | string;
      width(value?: number | string): acgraph.vector.vml.Text;
      wordBreak(): string | acgraph.vector.Text.WordBreak;
      wordBreak(value?: string | acgraph.vector.Text.WordBreak): acgraph.vector.vml.Text;
      wordWrap(): string | acgraph.vector.Text.WordWrap;
      wordWrap(value?: string | acgraph.vector.Text.WordWrap): string | acgraph.vector.vml.Text;
      x(): number;
      x(value?: number): acgraph.vector.vml.Text;
      y(): number;
      y(value?: number): acgraph.vector.vml.Text;
      zIndex(): number;
      zIndex(value?: number): acgraph.vector.vml.Text;
      path(): acgraph.vector.Path;
      path(value?: acgraph.vector.Path): acgraph.vector.vml.Text;
      unlistenByKey(key: Object): boolean;
  }
}

