<?php
    $title = "Testing CSS Positioning";
    require_once( "header.php" );
?>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="test-relative">
                        <p>This div is positioned relative.</p>
                        <div class="test-absolute">
                            <p>This div is positioned absolute.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="test-static">This div is positioned static.</div>
                    <div class="test-fixed">This div is positioned fixed.</div>
                </div>
            </div>
        </div>
    </main>

<?php require_once( "footer.php" );?>