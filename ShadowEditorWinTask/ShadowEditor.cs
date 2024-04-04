using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ShadowEditorWinTask
{
    public partial class ShadowEditor : Form
    {
        public ShadowEditor()
        {
            InitializeComponent();
            this.webViewShadowEditor.Source = new System.Uri(Directory.GetCurrentDirectory() + "/html-resources/ShadowEditor.html", System.UriKind.Absolute);
            this.FormClosed += ShadowEditor_FormClosed;
        }

        private async void ShadowEditor_FormClosed(object sender, FormClosedEventArgs e)
        {
            // Handle the form closed event here
            // This code will execute after the form is closed
            var test = await webViewShadowEditor.ExecuteScriptAsync("document.getElementById('blurInput')");
            MessageBox.Show("Form is closed.");
        }

        private async void btnOk_Click(object sender, EventArgs e)
        {
            var test = await webViewShadowEditor.ExecuteScriptAsync("document.getElementById('shadowBox').style.boxShadow");
        }
    }
}
