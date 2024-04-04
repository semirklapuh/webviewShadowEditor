namespace ShadowEditorWinTask
{
    partial class ShadowEditor
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.webViewShadowEditor = new Microsoft.Web.WebView2.WinForms.WebView2();
            this.btnOk = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.webViewShadowEditor)).BeginInit();
            this.SuspendLayout();
            // 
            // webViewShadowEditor
            // 
            this.webViewShadowEditor.AllowExternalDrop = true;
            this.webViewShadowEditor.CreationProperties = null;
            this.webViewShadowEditor.DefaultBackgroundColor = System.Drawing.Color.White;
            this.webViewShadowEditor.Location = new System.Drawing.Point(12, 12);
            this.webViewShadowEditor.Name = "webViewShadowEditor";
            this.webViewShadowEditor.Size = new System.Drawing.Size(1063, 606);
            this.webViewShadowEditor.TabIndex = 1;
            this.webViewShadowEditor.ZoomFactor = 1D;
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(838, 640);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(75, 23);
            this.btnOk.TabIndex = 2;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // ShadowEditor
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1087, 686);
            this.Controls.Add(this.btnOk);
            this.Controls.Add(this.webViewShadowEditor);
            this.Name = "ShadowEditor";
            this.Text = "ShadowEditor";
            ((System.ComponentModel.ISupportInitialize)(this.webViewShadowEditor)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private Microsoft.Web.WebView2.WinForms.WebView2 webViewShadowEditor;
        private System.Windows.Forms.Button btnOk;
    }
}