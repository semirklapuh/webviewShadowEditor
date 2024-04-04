using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ShadowEditorWinTask
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void txtShadowEditor_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            ShadowEditor shadowEditor = new ShadowEditor();
            shadowEditor.Show();
        }
    }
}
